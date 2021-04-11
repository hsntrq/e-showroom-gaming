from rest_framework import serializers
from . import models
from . import forms


class ProductSerializer(serializers.ModelSerializer):
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


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
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
