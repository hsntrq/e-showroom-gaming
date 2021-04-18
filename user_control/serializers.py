from rest_framework import serializers
from .models import CustomUser


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()
    contact = serializers.CharField()
    password = serializers.CharField()
    confirm_password = serializers.CharField()


class RefreshSerializer(serializers.Serializer):
    refresh = serializers.CharField()
