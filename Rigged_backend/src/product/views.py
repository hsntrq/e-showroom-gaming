from django.shortcuts import render
from .models import Product, ProductImages
from .forms import PostAd 

# Create your views here.

def productlist(request):
    productlist = Product.objects.all() # will retrieve all the products in our database
    
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
    if request.method == 'POST':
        form = PostAd(request.POST, request.FILES)
        if form.is_valid():
            new = form.save(commit=False)
            new.owner = request.user
            new.save()
        else:
            pass
    else:
       return render(request, 'Product/post.html', {'form':PostAd()}) 