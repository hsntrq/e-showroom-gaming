from rest_framework import serializers
from . import models

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


