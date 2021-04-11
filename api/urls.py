from django.urls import path
from . import api
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'product'

urlpatterns = [
    
    path('products/', api.ProductListView.as_view(), name = 'products'),
    path('create/', api.ProductCreateView.as_view(), name = 'post'),
    # path('search/', api.SearchAPIView.as_view(), name = 'search'),
    path('product/', api.ProductView.as_view(), name = 'product'),
    
    path('', api.productlist, name = 'product_list'),
    path('ad/<slug:product_slug>', api.productdetail, name = 'product_detail'),
    path('post/', api.create, name="post"),
    path('search/', api.search, name="search"),
    path('chat/', api.chat, name="chat"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
