from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

urlpatterns = [
    # Django
    path('admin/', admin.site.urls),
    # Api
    path('api/', include('api.urls')),

    # DJOSER/JWT
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

    # Frontend
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
