from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'product'

urlpatterns = [

    path('products/', views.ProductListView.as_view(), name='products'),
    path('create/', views.ProductCreateView.as_view(), name='post'),
    path('search/', views.SearchFilter.as_view(), name='search'),
    path('product/', views.ProductView.as_view(), name='product'),
    path('categories/', views.CategoryList.as_view(), name='categories'),
    path('post/', views.PostView.as_view(), name='create')
]

urlpatterns = format_suffix_patterns(urlpatterns)
