from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'product'

urlpatterns = [
    path('', views.index),
    path('home/', views.index)
]

urlpatterns = format_suffix_patterns(urlpatterns)