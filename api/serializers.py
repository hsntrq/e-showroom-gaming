from rest_framework import serializers
from . import models
from . import forms



class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value

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

class OrderlistSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    final_price = serializers.SerializerMethodField()

    class Meta:
        model = models.Orderlist
        fields = (
            'id',
            'product',
            'quantity',
            'final_price'
        )

    def get_item(self, obj):
        return ProductSerializer(obj.product_id).data

    def get_final_price(self, obj):
        return obj.get_total_product_price()

class OrderSerializer(serializers.ModelSerializer):
    order_items = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    class Meta:
        model = models.Order
        fields = (
            'id',
            'order_items',
            'total'
        )

    def get_order_items(self, obj):
        return OrderlistSerializer(obj.products.all(), many=True).data

    def get_total(self, obj):
        return obj.get_total()


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Address
        fields = (
            'id',
            'user',
            'street_address',
            'apartment_address',
            'zip',
            'default'
        )