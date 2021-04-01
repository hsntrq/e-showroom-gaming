from django.shortcuts import render, redirect
from . import models
from .forms import PostAd 
from django.db.models import Q
from django.db.models import Count
# Create your views here.


# class ProductListView(APIView):
#     def get(self, request):
#         p = models.Product.objects.all()
#         serializer = serializers.ProductSerializer(p, many = True)
#         return Response(serializer.data)


# ******************************************************************************************************
def productlist(request):
    productlist = models.Product.objects.all().order_by('featured') # will retrieve all the products in our database
    
    search_query = request.GET.get('q')
    if search_query:
        print(search_query) # will print search query in cd
        productlist = productlist.filter(
            Q(name__icontains = search_query) | 
            Q(description__icontains = search_query) | 
            Q(condition__icontains = search_query) 
            # Q(brand__brand_name__icontains = search_query)
        )

    
    template = 'Product/product_list.html'
    context = {'product_list' : productlist}
    
    return render(request, template, context)

def categorylist(request):

    CategoryList = models.Category.objects.annotate(total_products = Count('product'))
    productlist = models.Product.objects.all().order_by('featured') # will retrieve all the products in our database


    context = {'category_list' : CategoryList}
    context = {'product_list' : productlist}
def search(request):
    productlist = models.Product.objects.all()
    context = {'product_list' : productlist}
    template = 'Product/search.html'
    return render(request, template, context)


def chat(request):
    template = 'Product/chat.html'
    return render(request, template)

def productdetail(request, product_slug):
    # print(product_slug)
    
    # print(product_slug)
    productdetail = models.Product.objects.get(slug = product_slug)
    productimages = models.ProductImages.objects.filter(product=productdetail)
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
            form = PostAd(request.POST, request.FILES)
        else:
            print('no')
        context = {
            'form':form
        }
        return render(request, 'Product/post.html', context)