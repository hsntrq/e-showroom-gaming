from django.contrib import admin
# Register your models here.

from .models import Product, Category, Brand, ProductImages, Order, Orderlist, Address
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(ProductImages)
admin.site.register(Order)
admin.site.register(Orderlist)
admin.site.register(Address)

