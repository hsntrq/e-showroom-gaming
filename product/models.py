from django.db import models
from django.contrib.auth.models import User
import datetime
from django.utils.text import slugify


# Create your models here.


class Product(models.Model):

    CONDITION_TYPE = (
        ("New", "New"),
        ("Used", "Used")
    )
    # will contain product information
    name = models.CharField(max_length=50)
    owner = models.CharField(max_length=50, default='HasanNaseem')
    description = models.TextField(max_length=500)
    condition = models.CharField(max_length=100, choices=CONDITION_TYPE)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    brand = models.CharField(max_length=50, default="Sony")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='main_product/', blank=True, null=True)
    created = models.DateField(default=datetime.datetime.now)
    featured = models.CharField(max_length=6, default="z")
    slug = models.SlugField(blank=True, null=True)

    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url

    def save(self, *args, **kwargs):
        if not self.slug and self.name:
            # will remove spaces in the product name and replace it with underscore
            self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class ProductImages(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/', blank=True, null=True)

    def __str__(self):
        return self.product.name

    class Meta:
        verbose_name = 'Product Image'
        verbose_name_plural = 'Product Images'


class Category(models.Model):
    # for product category

    category_name = models.CharField(max_length=50)
    # blank and null = True enable the user to leave this field
    image = models.ImageField(upload_to='category/', blank=True, null=True)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.category_name


class Brand(models.Model):
    # for product category

    brand_name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'brand'
        verbose_name_plural = 'brands'

    def __str__(self):
        return self.brand_name