from django.urls import path, include
from . import views

urlpatterns = [
    # Root
    path('', views.api_root, name='api-root'),

    # Apps
    path('account/', include('account.urls')),
    path('tweet/', include('tweet.urls')),
]
