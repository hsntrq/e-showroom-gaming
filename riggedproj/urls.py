from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls', namespace='api')),
    path('', include('frontend.urls', namespace='products')),
    path('api-auth/', include('rest_framework.urls')),
    path('user/', include('user_control.urls'))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# main url for rigged
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
