from django.forms import ModelForm
from .models import Product

class PostAd(ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'condition', 'category', 'brand', 'price', 'image', 'created']
    
class UpdateForm(ModelForm):
    class Meta:
        model = Product
        fields = ['name','description','price']