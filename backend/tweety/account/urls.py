from django.urls import path
from . import views

urlpatterns = [
    # Account
    path('', views.AccountList.as_view(), name='account-list'),
    path('<int:pk>/', views.AccountDetail.as_view(), name='account-detail'),

    # Account like
    path('<int:pk>/likes/', views.AccountLikeList.as_view(), name='account-like-list'),

    # Account tweets
    path('<int:pk>/tweets/', views.AccountTweetList.as_view(), name='account-tweet-list'),

    # Follow
    path('follow/', views.FollowAddRemove.as_view(), name='account-follow-add-remove'),
    path('follow/<int:pk>/', views.IsFollowing.as_view(), name='account-is-following'),

    # Account following
    path('following/tweets/', views.FollowingTweetList.as_view(), name='account-following-tweet-list'),
    path('following/list/<int:pk>/', views.FollowingList.as_view(), name='account-follow-list'),

    # Account follower
    path('follower/<int:pk>/', views.FollowerList.as_view(), name='account-followers-list'),
]