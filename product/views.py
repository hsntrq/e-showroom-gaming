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