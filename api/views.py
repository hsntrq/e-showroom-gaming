from django.shortcuts import render, redirect
from . import models
from .forms import PostAd
from django.db.models import Q
from django.db.models import Count
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from . import serializers
from rest_framework.generics import ListAPIView


class ProductListView(APIView):
    def get(self, request):
        p = models.Product.objects.all().order_by('featured')
        serializer = serializers.ProductSerializer(p, many=True)
        return Response(serializer.data)

# ******************************************************************************************************

def productlist(request):
    CategoryList = models.Category.objects.all()
    productlist = models.Product.objects.all().order_by('featured') # will retrieve all the products in our database
    template = 'Product/product_list.html'
    context = {'category_list': CategoryList, 'product_list': productlist}

    return render(request, template, context)


def search(request):

    productlist = models.Product.objects.all() # will retrieve all the products in our database
    CategoryList = models.Category.objects.annotate(total_products = Count('product'))

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
    context = {'product_detail': productdetail, 'product_images': productimages, 'category_list': CategoryList}
    return render(request, template, context)


def create(request):
    CategoryList = models.Category.objects.all()
    form = PostAd(request.POST, request.FILES)
    if form.is_valid():
        form.save()
        return redirect('/home')
    context = {
        'form': form,
        'category_list': CategoryList,
    }
    print('error', form)
    return render(request, 'Product/post.html', context)