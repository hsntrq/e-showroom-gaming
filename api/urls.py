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
    path('addtocart/', views.AddToCartView.as_view(), name='addtocart'),
    path('checkout/', views.CheckOutView.as_view(), name='checkout'),
    path('cart/', views.CartView.as_view(), name='cart'),
    path('orders/', views.MyorderView.as_view(), name='orders'),
    path('orderlist/', views.OrderlistView.as_view(), name='orderlist'),
    path('deletefromcart/<id>', views.DeleteFromCartView.as_view(), name='deletefromcart'),
    path('updatequantity', views.OrderQuantityUpdateView.as_view(), name='updatequantity'),
    ]

urlpatterns = format_suffix_patterns(urlpatterns)
