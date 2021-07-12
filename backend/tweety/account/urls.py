from django.urls import path
from . import views

urlpatterns = [
    path('', views.AccountList.as_view(), name='account-list'),
    path('<int:pk>/', views.AccountDetail.as_view(), name='account-detail'),

    path('<int:pk>/likes/', views.AccountLikeList.as_view(), name='account-like-list'),

    path('<int:pk>/tweets/', views.AccountTweetList.as_view(), name='account-tweet-list'),

    path('<int:pk>/following/', views.FollowingList.as_view(), name='account-follow-list'),
    path('follow/<int:id_follow>/', views.FollowAddRemove.as_view(), name='account-follow-add-remove'),
    path('<int:pk>/followers/', views.FollowerList.as_view(), name='account-followers-list')
]