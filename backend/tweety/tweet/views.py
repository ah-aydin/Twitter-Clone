from django.http import request
from .models import Tweet, Like
from .serializers import TweetSerializer, LikeSerializer
from tweety.permissions import IsOwnerOrReadOnly
from .heplers import get_tweet

from django.conf import settings
from django.db.models.query import QuerySet

from rest_framework import permissions, renderers, generics, status
from rest_framework.decorators import permission_classes
from rest_framework.response import Response

# Tweet
class TweetList(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        """
        Save the data provied form request
        """
        data = self.request.data
        content = data['content']
        # Check if there is a retweet id provied
        retweet = None
        try:
            if (pk := data['retweet_id']):
                retweet = get_tweet(pk)
        except:
            pass
        serializer.save(owner=self.request.user, content=content, retweet=retweet)

class TweetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def perform_update(self, serializer):
        data = self.request.data
        content = data['content']
        serializer.save(owner=self.request.user, content=content)

class TweetContent(generics.GenericAPIView):
    queryset = Tweet.objects.all()
    renderer_classes = [renderers.StaticHTMLRenderer]

    def get(self, request, *args, **kwargs):
        tweet = self.get_object()
        # TODO return a more fance response
        return Response(tweet.content)

# Like
class LikeList(generics.ListAPIView):
    serializer_class = LikeSerializer

    def get_queryset(self):
        tweet = get_tweet(self.kwargs['pk'])
        return Like.objects.filter(tweet=tweet)
    
    def get(self, request, pk, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True, context={'request': request})
        return Response({"like_count": len(queryset), "users": serializer.data})

class LikeAddRemove(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk, *args, **kwargs):
        tweet = get_tweet(pk)
        try: # If there is a like by this user, unlike
            like = Like.objects.get(owner=request.user, tweet=tweet)

            # Update the tweet
            tweet.like_count -= 1
            tweet.save()

            # Delete like
            like.delete()
            return Response("Disliked", status=status.HTTP_200_OK)
        except Exception: # Like the tweet
            # Update tweet
            tweet.like_count += 1
            tweet.save()

            # Create like
            like = Like.objects.create(owner=request.user, tweet=tweet)
            return Response("Liked", status=status.HTTP_200_OK)

class UserHadLikedTweet(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, tweet_id, *args, **kwargs):
        try:
            like = Like.objects.get(tweet__id=tweet_id, owner=request.user)
            return Response(True)
        except Exception:
            return Response(False)