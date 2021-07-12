from django.db.models import fields
from rest_framework import serializers
from .models import Account, Follow
from tweet.models import Like

class AccountCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'email', 'username', 'name', 'last_name', 'password')

class AccountSerializer(serializers.HyperlinkedModelSerializer):
    likes_url = serializers.HyperlinkedIdentityField(view_name='account-like-list', source='likes')
    tweets_url = serializers.HyperlinkedIdentityField(view_name='account-tweet-list', source='tweets')
    followers_url = serializers.HyperlinkedIdentityField(view_name='account-followers-list', source='followers')
    following_url = serializers.HyperlinkedIdentityField(view_name='account-follow-list', source='following')
    class Meta:
        model = Account
        fields = [
            'url', 'id', 'username', 'name', 'last_name', 
            'date_joined', 'last_login', 
            'likes_url', 'tweets_url', 
            'follower_count', 'followers_url', 
            'following_count', 'following_url'
        ]

class LikeSerializer(serializers.HyperlinkedModelSerializer):
    tweet_url = serializers.HyperlinkedRelatedField(read_only=True, view_name='tweet-detail', source='tweet')
    class Meta:
        model = Like
        fields = ['tweet_url']

class FollowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Follow
        fields = ['follower', 'follow']

class FollowingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Follow
        fields = ['follow']

class FollowerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Follow
        fields = ['follower']