from django.contrib import admin

# Register your models here.
from .models import CustomUser, Jwt

admin.site.register((CustomUser, Jwt))
