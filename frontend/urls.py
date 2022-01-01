from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'product'

urlpatterns = [
    path('', views.index),
    path('home/', views.index),
    path('ad/<slug:product_slug>', views.index),
    path('search/', views.index),    
    path('post/', views.index),
    path('profile/', views.index),
    path('login/', views.index),
    path('cart/', views.index),
    path('shipping/', views.index),
    path('confirm/', views.index)
]

urlpatterns = format_suffix_patterns(urlpatterns)
