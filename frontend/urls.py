from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'product'

urlpatterns = [
    path('', views.index),
    path('home/', views.index),
    path('ad/<slug:product_slug>', views.index),
    path('search/', views.index)
    
]

urlpatterns = format_suffix_patterns(urlpatterns)