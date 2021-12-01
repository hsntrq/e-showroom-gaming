from django.shortcuts import render, redirect
from .models import Product, ProductImages
from .forms import PostAd 

# Create your views here.

def productlist(request):
    productlist = Product.objects.all().order_by('featured') # will retrieve all the products in our database
    
    template = 'Product/product_list.html'

    context = {'product_list' : productlist}
    
    return render(request, template, context)



def productdetail(request, product_slug):
    # print(product_slug)
    
    # print(product_slug)
    productdetail = Product.objects.get(slug = product_slug)
    productimages = ProductImages.objects.filter(product=productdetail)
    template = 'Product/product_detail.html'
    context = {'product_detail' : productdetail, 'product_images' : productimages}
    return render(request, template, context)



#####


def create(request):
        form = PostAd(request.POST, request.FILES)
        print(form)
        if form.is_valid():
            print('yes')
            form.save()
            return redirect('/home')
            # form = PostAd(request.POST, request.FILES)
        else:
            print('no')
        context = {
            'form':form
        }
        return render(request, 'Product/post.html', context)


# from django.db.models import Q
# from . import models, serializers
# from rest_framework import status, generics, views, response


# class ProductListView(views.APIView):
#     def get(self, request):
#         p = models.Product.objects.all().order_by('featured')
#         serializer = serializers.ProductSerializer(p, many=True)
#         return response.Response(serializer.data)


# class ProductView(views.APIView):
#     def get(self, request):
#         product_slug = request.GET.get('slug')
#         if product_slug:
#             productdetail = models.Product.objects.get(slug=product_slug)
#             if productdetail:
#                 serializer = serializers.ProductSerializer(productdetail)
#                 return response.Response(serializer.data)
#             return response.Response({'Ad Not Found': 'Invalid Ad Name'}, status=status.HTTP_404_NOT_FOUND)
#         return response.Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


# class SearchFilter(views.APIView):   # to filter according to category
#     def get(self, request):
#         productlist = models.Product.objects.all()
#         search_query = request.GET.get('q')
#         if search_query:
#             productlist = productlist.filter(
#                 Q(name__icontains=search_query) |
#                 Q(description__icontains=search_query) |
#                 Q(condition__icontains=search_query) |
#                 Q(brand__icontains=search_query)
#             )

#         category_query = request.GET.get('category')
#         if category_query:
#             category = models.Category.objects.all()
#             for c in category:
#                 if category_query == c.category_name:
#                     category_id = c.id
#                     break
#             productlist = productlist.filter(category=category_id)

#         price_query = request.GET.get('price')
#         if price_query:
#             price_low, price_high = [int(x) for x in price_query.split()]
#             productlist = productlist.filter(
#                 price__range=(price_low, price_high))

#         sort_query = request.GET.get('sort')
#         if sort_query:
#             if sort_query == "name":
#                 productlist = productlist.order_by('name')
#             elif sort_query == "date":
#                 productlist = productlist.order_by('-created')
#             elif sort_query == "priceh":
#                 productlist = productlist.order_by('-price')
#             elif sort_query == "pricel":
#                 productlist = productlist.order_by('price')
#         if productlist:
#             serializer = serializers.ProductSerializer(productlist, many=True)
#             return response.Response(serializer.data)
#         return response.Response({'No Search Results Found': 'No Products exists under this Category'}, status=status.HTTP_404_NOT_FOUND)


# class CategoryList(views.APIView):         # to display categories in the dropdown menu
#     def get(self, request):
#         c = models.Category.objects.all()
#         serializer = serializers.CategorySerializer(c, many=True)
#         return response.Response(serializer.data)


# class ProductCreateView(generics.CreateAPIView):
#     queryset = models.Product.objects.all()
#     serializer_class = serializers.ProductSerializer
