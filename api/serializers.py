from rest_framework import serializers
from . import models
from . import forms


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

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
            'slug',
            'quantity'
        ]

    def get_category(self, obj):
        return CategorySerializer(obj.category).data['category_name']


class ProductCreateSerializer(serializers.ModelSerializer):
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
            'slug',
            'quantity'
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
            'orderlistid',
            'product',
            'quantity',
            'final_price'
        )

    def get_product(self, obj):
        return ProductSerializer(obj.product).data['name']

    def get_final_price(self, obj):
        return obj.get_total_product_price()


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


class CartViewSerializer(serializers.ModelSerializer):
    product = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    product_quantity = serializers.SerializerMethodField()
    slug = serializers.SerializerMethodField()

    class Meta:
        model = models.Orderlist
        fields = [
            'product',
            'quantity',
            'price',
            'image',
            'product_quantity',
            'slug',
        ]

    def get_price(self, obj):
        return ProductSerializer(obj.product).data['price']

    def get_product(self, obj):
        return ProductSerializer(obj.product).data['name']

    def get_image(self, obj):
        return ProductSerializer(obj.product).data['image']

    def get_product_quantity(self, obj):
        return ProductSerializer(obj.product).data['quantity']

    def get_slug(self, obj):
        return ProductSerializer(obj.product).data['slug']


class MyorderSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = models.Order
        fields = [
            'orderid',
            'start_date',
            'delivery_date',
            'received',
            'cashOnDelivery',
            'total_price',
        ]

    def get_total_price(self, obj):
        return obj.get_total()
