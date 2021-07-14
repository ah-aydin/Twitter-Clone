from django.urls import path
from . import views

urlpatterns = [
    # Tweets
    path('', views.TweetList.as_view(), name='tweet-list'),
    path('<int:pk>/', views.TweetDetail.as_view(), name='tweet-detail'),
    path('<int:pk>/content/', views.TweetContent.as_view(), name='tweet-content'),

    # Tweet likes
    path('<int:pk>/likes/', views.LikeList.as_view(), name='like-list'),
    path('<int:pk>/likes/add/', views.LikeAddRemove.as_view(), name='like-add-remove')
]