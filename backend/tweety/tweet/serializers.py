from .models import Tweet, Like

from django.conf import settings
from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework import serializers

class TweetSerializer(serializers.HyperlinkedModelSerializer):
    # Create hyperlinks for the content and owner of the tweet
    content_url = serializers.HyperlinkedIdentityField(view_name='tweet-content', format='html', source='content')

    owner_id = serializers.IntegerField(source='owner.pk', read_only=True)

    owner_url = serializers.HyperlinkedRelatedField(
        view_name='account-detail', 
        source='owner',
        read_only=True
    )
    owner_username = serializers.CharField(source='owner.username', read_only=True)

    likes_url = serializers.HyperlinkedIdentityField(view_name='like-list', format='html', source='likes')

    retweet_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Tweet
        fields = [
            'url', 'id', 'owner_id', 'owner_url', 'owner_username', 
            'date_created', 'content', 'content_url', 
            'like_count', 'likes_url', 'retweet_id', 'retweet',
        ]

class LikeSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedRelatedField(read_only=True, view_name='account-detail', source='owner')
    class Meta:
        model = Like
        fields = ['url']