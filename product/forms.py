from django import forms
from .models import Product

class PostAd(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
            'name',
            'owner',
            'price',
            'brand',
            'condition',
            'category',
            'description',
            'image',
            'featured']