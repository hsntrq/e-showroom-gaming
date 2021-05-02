from django.db.models import Q
from django.shortcuts import get_object_or_404
from . import models, serializers
from rest_framework import status, generics, views, response


class ProductListView(views.APIView):
    def get(self, request):
        p = models.Product.objects.all().order_by('featured')
        serializer = serializers.ProductSerializer(p, many=True)
        return response.Response(serializer.data)


class ProductView(views.APIView):
    def get(self, request):
        product_slug = request.GET.get('slug')
        if product_slug:
            productdetail = models.Product.objects.get(slug=product_slug)
            if productdetail:
                serializer = serializers.ProductSerializer(productdetail)
                return response.Response(serializer.data)
            return response.Response({'Ad Not Found': 'Invalid Ad Name'}, status=status.HTTP_404_NOT_FOUND)
        return response.Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class SearchFilter(views.APIView):   # to filter according to category
    def get(self, request):
        productlist = models.Product.objects.all()
        search_query = request.GET.get('q')
        if search_query:
            productlist = productlist.filter(
                Q(name__icontains=search_query) |
                Q(description__icontains=search_query) |
                Q(condition__icontains=search_query) |
                Q(brand__icontains=search_query)
            )

        category_query = request.GET.get('category')
        if category_query:
            category = models.Category.objects.all()
            for c in category:
                if category_query == c.category_name:
                    category_id = c.id
                    break
            productlist = productlist.filter(category=category_id)

        price_query = request.GET.get('price')
        if price_query:
            price_low, price_high = [int(x) for x in price_query.split()]
            productlist = productlist.filter(
                price__range=(price_low, price_high))

        sort_query = request.GET.get('sort')
        if sort_query:
            if sort_query == "name":
                productlist = productlist.order_by('name')
            elif sort_query == "date":
                productlist = productlist.order_by('-created')
            elif sort_query == "priceh":
                productlist = productlist.order_by('-price')
            elif sort_query == "pricel":
                productlist = productlist.order_by('price')
        if productlist:
            serializer = serializers.ProductSerializer(productlist, many=True)
            return response.Response(serializer.data)
        return response.Response({'No Search Results Found': 'No Products exists under this Category'}, status=status.HTTP_404_NOT_FOUND)


class CategoryList(views.APIView):         # to display categories in the dropdown menu
    def get(self, request):
        c = models.Category.objects.all()
        serializer = serializers.CategorySerializer(c, many=True)
        return response.Response(serializer.data)


class ProductCreateView(generics.CreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductCreateSerializer


class AddToCartView(views.APIView):
    def post(self, request, *args, **kwargs):
        slug = request.data.get('slug', None)
        if slug is None:
            return response.Response({"message": "Invalid request"}, status=status.HTTP_400_BAD_REQUEST)

        product = get_object_or_404(models.Product, slug=slug)

        cart_order = models.Orderlist.objects.filter(
            product_id=product,
            ordered=False
        )

        if cart_order.exists():
            cart_order = cart_order.first()
            cart_order.quantity += 1
            cart_order.save()
            return response.Response({"Created": "201"}, status=status.HTTP_201_CREATED)
        else:
            cart_order = models.Orderlist.objects.create(
                product_id=product.id,
                user_id=4,
                quantity=1,
                ordered=False
            )
            return response.Response({"Created": "201"}, status=status.HTTP_201_CREATED)


class CheckOutView(views.APIView):
    def post(self, request, *args, **kwargs):

        user = 4

        cart_orders = models.Orderlist.objects.filter(
            user_id=user,
            ordered=False
        )

        if not cart_orders.exists():
            return response.Response({"Bad Request":"No orders to checkout"}, status=status.HTTP_400_BAD_REQUEST)

        street_address = request.data.get('street_address', None)
        apartment_address = request.data.get('appartment_address', None)
        city = request.data.get('city', None)
        zipC = request.data.get('zipC', None)
        phone_number = request.data.get('phone_number', None)
        default = request.data.get('default', False)
        cashOD = request.data.get('cashOnDelivery', True)

        address = models.Address.objects.create(
            user_id=user,
            street_address=street_address,
            apartment_address=apartment_address,
            city=city,
            zipC=zipC
        )

        address.save(force_update=True)

        Order = models.Order.objects.create(
            shipping_address=address,
            cashOnDelivery=(cashOD == 'True'),
            user_id=user,

        )

        Order.save()

        for cart_order in cart_orders:
            if cart_order.product.quantity >= cart_order.quantity:
                cart_order.ordered = True
                cart_order.product.quantity -= cart_order.quantity
                cart_order.product.save()
                cart_order.order = Order
                cart_order.save()

        return response.Response({"Created": "201"}, status=status.HTTP_201_CREATED)

class OrderQuantityUpdateView(views.APIView):
    def post(self, request, *args, **kwargs):
        user=4
        slug = request.data.get('slug', None)
        increase = request.data.get('increase', "True") == "True"
        if slug is None:
            return response.Response({"message": "Invalid data"}, status=HTTP_400_BAD_REQUEST)
        product = get_object_or_404(models.Product, slug=slug)
        
        cart_order = models.Orderlist.objects.filter(
            product_id=product,
            ordered=False
        )

        if cart_order.exists():
            cart_order = cart_order.first()
            # check if the order item is in the order
            if cart_order.product.filter(item__slug=item.slug).exists():
                order_item = OrderItem.objects.filter(
                    item=item,
                    user=request.user,
                    ordered=False
                )[0]
                if order_item.quantity > 1:
                    order_item.quantity -= 1
                    order_item.save()
                else:
                    order.items.remove(order_item)
                return response.Response(status=status.HTTP_200_OK)
            else:
                return response.Response({"message": "This item was not in your cart"}, status=HTTP_400_BAD_REQUEST)
        else:
            return response.Response({"message": "You do not have an active order"}, status=HTTP_400_BAD_REQUEST)
