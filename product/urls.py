from django.urls import path
from . import views

app_name = 'product'

urlpatterns = [
    path('', views.productlist, name = 'product_list'),
    path('<slug:product_slug>', views.productdetail, name = 'product_detail'),
    path('post.html/', views.create, name="post"),
    path('search.html/', views.search, name="search"),
    path('chat.html/', views.chat, name="chat"),
]