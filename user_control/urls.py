from django.urls import path, include
from .views import LoginView, RegisterView, RefreshView, FileUploadView


urlpatterns = [
    path('login', LoginView.as_view()),
    path('register', RegisterView.as_view()),
    path('refresh', RefreshView.as_view()),
    path('fileupload', FileUploadView.as_view())
]
