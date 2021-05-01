from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# from message_control.models import GenericFileUpload
from django.utils import timezone
from phonenumber_field.modelfields import PhoneNumberField


class CustomUserManager(BaseUserManager):

    def create_user(self, email, first_name, last_name, contact, password, **extra_fields):
        if not email:
            raise ValueError("Email field required")

        if not first_name:
            raise ValueError("First Name field required")

        if not last_name:
            raise ValueError("Last Name field required")

        if not contact:
            raise ValueError("Contact field required")

        if not password or len(password) < 8:
            if not password:
                raise ValueError("Password field required")
            raise ValueError("Password is too short!")

        normalized_email = self.normalize_email(email)

        user = self.model(email=normalized_email, first_name=first_name, last_name=last_name,
                          contact=contact, password=password, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        normalized_email = self.normalize_email(email)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        # return self.create_user(email, password, **extra_fields)
        user = self.model(email=normalized_email,
                          password=password, **extra_fields)
        user.set_password(password)
        user.save()


class CustomUser(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(
        max_length=100, default="", editable=False)
    last_name = models.CharField(
        max_length=100, default="", editable=False)
    email = models.CharField(unique=True, max_length=40)
    contact = PhoneNumberField(max_length=12)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_online = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = "email"
    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        ordering = ("created_at",)


class FileUpload(models.Model):
    file_upload = models.FileField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file_upload}"


class UserProfile(models.Model):
    user = models.OneToOneField(
        CustomUser, related_name="user_profile", on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    caption = models.CharField(max_length=250)
    about = models.TextField()
    profile_picture = models.ForeignKey(
        FileUpload, related_name="user_image", on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username

    class Meta:
        ordering = ("created_at",)


class Jwt(models.Model):
    user = models.OneToOneField(
        CustomUser, related_name="login_user", null=True, on_delete=models.SET_NULL)
    access = models.TextField()
    refresh = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
