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
# from serializers import PostSerializer
from rest_framework import generics, status
# Create your views here.


def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


class ProductView(APIView):
    def get(self, request):
        product_slug = request.GET.get('slug')
        if product_slug:
            productdetail = models.Product.objects.get(slug=product_slug)
            if productdetail:
                serializer = serializers.ProductSerializer(productdetail)
                return Response(serializer.data)
            return Response({'Ad Not Found': 'Invalid Ad Name'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class PostView(APIView):
    serializer_class = serializers.PostSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request)

        if serializer.is_valid():
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

        return Response(serializer.PostSerializer(product).data)
# ******************************************************************************************************


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
