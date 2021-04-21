from rest_framework import serializers
from . import models
from . import forms


class ProductSerializer(serializers.ModelSerializer):
    # category = serializers.PrimaryKeyRelatedField(queryset=models.Category.objects.all())
    # category = serializers.StringRelatedField(many=True)
    # category = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = models.Product
        fields = [
            'name',
            'owner',
            'description',
            'condition',
            'category',
            'brand',
            'price',
            'image',
            'created',
            'featured',
            'slug'
        ]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = [
            'category_name',
        ]

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        form = forms.PostAd
        fields = [
            'name',
            'description',
            'condition',
            'category',
            'brand',
            'price',
            'image',
            'featured'
        ]
