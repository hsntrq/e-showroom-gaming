from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'product'

urlpatterns = [
    
    path('products/', views.ProductListView.as_view(), name = 'products'),
    path('create/', views.ProductCreateView.as_view(), name = 'post'),
    path('search/', views.SearchFilter.as_view(), name = 'search'),
    path('product/', views.ProductView.as_view(), name = 'product'),
    
    path('', views.productlist, name = 'product_list'),
    path('ad/<slug:product_slug>', views.productdetail, name = 'product_detail'),
    path('post/', views.create, name="post"),
    # path('search/', views.search, name="search"),
    path('chat/', views.chat, name="chat"),
]

urlpatterns = format_suffix_patterns(urlpatterns)
