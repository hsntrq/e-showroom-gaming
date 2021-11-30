from django.shortcuts import render, redirect
from django.db.models import Q, Count
from . import(
    models,
    serializers,
    forms
)
from rest_framework import(
    status,
    filters,
    generics,
    views,
    response
)

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
        p = models.Product.objects.all()
        search_query = request.GET.get('q')
        if search_query:
            p = p.filter(
                Q(name__icontains=search_query) |
                Q(description__icontains=search_query) |
                Q(condition__icontains=search_query) |
                Q(brand__icontains=search_query)
            )
            if p:
                serializer = serializers.ProductSerializer(p, many=True)
                print(serializer)
                return response.Response(serializer.data)
            return response.Response({'No Search Results Found': 'No Products exists under this Category'}, status=status.HTTP_404_NOT_FOUND)
        
        price_query = request.GET.get('price')
        if price_query:
            price_low, price_high = [int(x) for x in price_query.split()]
            p = p.filter(price__range=(price_low, price_high))
            if p:
                serializer = serializers.ProductSerializer(p, many=True)
                return response.Response(serializer.data)
            return response.Response({'No Search Results Found': 'No Products exists under this Category'}, status=status.HTTP_404_NOT_FOUND)


        
        category_query = request.GET.get('category')
        if category_query:
            category = models.Category.objects.all()
            for c in category:
                if category_query == c.category_name:
                    category_id = c.id
                    break
            p = productlist.filter(category=category_id)
            if p:
                serializer = serializers.ProductSerializer(p, many = True)
                return response.Response(serializer.data)
            return response.Response({'No Search Results Found': 'No Products exists under this Category'}, status=status.HTTP_404_NOT_FOUND)
        return response.Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class CategoryList(views.APIView):         # to display categories in the dropdown menu
    def get(self, request):
        c = models.Category.objects.all()
        serializer = serializers.CategorySerializer(c, many=True)
        return response.Response(serializer.data)


class ProductCreateView(generics.CreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    # permission_classes = (permissions.IsAuthenticated, )


class SearchAPIView(generics.ListCreateAPIView):
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = models.Product.objects.all().order_by('featured')
    serializer_class = serializers.ProductSerializer



class PostView(views.APIView):
    serializer_class = serializers.PostSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request)

        # if serializer.is_valid():
        name = serializer.data.name
        owner = 'HasanNaseem'
        brand = serializer.data.brand
        condition = serializer.data.condition
        # category = 'Processors'
        category = models.Category(serializer.data.category)
        description = serializer.data.description
        image = serializer.data.image
        featured = serializer.data.featured

        product = forms.PostAd(name=name, owner=owner, brand=brand, condition=condition,
                               category=category, description=description, image=image, featured=featured)
        product.save()

        return response.Response(serializers.PostSerializer('product').data)
# ******************************************************************************************************


def productlist(request):
    CategoryList = models.Category.objects.all()
    productlist = models.Product.objects.all().order_by(
        'featured')  # will retrieve all the products in our database
    template = 'Product/product_list.html'
    context = {'category_list': CategoryList, 'product_list': productlist}

    return render(request, template, context)


def search(request):

    # will retrieve all the products in our database
    productlist = models.Product.objects.all()
    CategoryList = models.Category.objects.annotate(
        total_products=Count('product'))

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
        productlist = productlist.filter(price__range=(price_low, price_high))

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

    template = 'Product/search.html'
    context = {'category_list': CategoryList, 'product_list': productlist}
    return render(request, template, context)


def chat(request):
    template = 'Product/chat.html'
    return render(request, template)


def productdetail(request, product_slug):
    CategoryList = models.Category.objects.all()
    productdetail = models.Product.objects.get(slug=product_slug)
    productimages = models.ProductImages.objects.filter(product=productdetail)
    template = 'Product/product_detail.html'
    context = {'product_detail': productdetail,
               'product_images': productimages, 'category_list': CategoryList}
    return render(request, template, context)

