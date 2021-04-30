from django.db import models
import datetime
from django.utils.text import slugify
from django.db.models import Sum
from user_control.models import CustomUser
from phonenumber_field.modelfields import PhoneNumberField


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
    created = models.DateField(default=datetime.date.today)
    featured = models.CharField(max_length=6, default="z")
    slug = models.SlugField(blank=True, null=True)

    def image_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url

    def save(self, *args, **kwargs):
        if not self.slug and self.name:
            # will remove spaces in the product name and replace it with hyphen/ underscore
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

    category_name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.category_name


class Brand(models.Model):
    

    brand_name = models.CharField(max_length=50)

    class Meta:
        verbose_name = 'brand'
        verbose_name_plural = 'brands'

    def __str__(self):
        return self.brand_name


class Orderlist(models.Model):       #Orderlist productid, qty, orderid, *user, *ordered, ref_code(FK)
    ordered = models.BooleanField(default=False)
    product_id = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    orderlistid = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} of {self.product_id.name}"

    def get_total_product_price(self):
        return self.quantity * self.product_id.price


class Order(models.Model):             #user, ref_code, ordered_date, delivery_date, shipping address, *order
    user_id = models.ForeignKey('user_control.CustomUser',on_delete=models.CASCADE)
    orderid = models.ForeignKey(Orderlist, on_delete = models.CASCADE)
    products = models.ManyToManyField(Orderlist)
    start_date = models.DateTimeField(auto_now_add=True)
    delivery_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    shipping_address = models.ForeignKey(
        'Address', related_name='shipping_address', on_delete=models.SET_NULL, blank=True, null=True)
    received = models.BooleanField(default=False)

    def __str__(self):
        return self.user.first_name
    def get_total(self):
        total = 0
        for order_item in self.products.all():
            total += order_item.get_total_price()
        return total

    
class Address(models.Model):
    user = models.ForeignKey('user_control.CustomUser', on_delete=models.CASCADE)
    street_address = models.CharField(max_length=100)
    apartment_address = models.CharField(max_length=100)
    city = models.CharField(max_length=58)
    zip = models.CharField(max_length=100)
    phone_number = PhoneNumberField(max_length=12)
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.user.first_name

    class Meta:
        verbose_name_plural = 'Addresses'
