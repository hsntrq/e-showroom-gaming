from django.forms import ModelForm
from .models import Product

class PostAd(ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'price', 'brand', 'condition', 'category', 'description', 'image',]
    
# class UpdateForm(ModelForm):
#     class Meta:
#         model = Product
#         fields = ['name','description','price']