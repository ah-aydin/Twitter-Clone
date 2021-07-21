from .models import Account, Follow
from .serializers import AccountSerializer, FollowSerializer, FollowingSerializer, FollowerSerializer, LikeSerializer
from tweet.serializers import TweetSerializer
from tweet.models import Tweet

from django.db.models import Q, QuerySet
from rest_framework import generics, permissions, status
from rest_framework.response import Response

# Account

class AccountList(generics.ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class AccountDetail(generics.RetrieveAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class AccountLikeList(generics.ListAPIView):
    serializer_class = LikeSerializer

    def get_queryset(self):
        account = Account.objects.get(pk=self.kwargs['pk'])
        return account.likes.order_by('date_created')

class AccountTweetList(generics.ListAPIView):
    serializer_class = TweetSerializer
    
    def get_queryset(self):
        account = Account.objects.get(pk=self.kwargs['pk'])
        return account.tweets.order_by('date_created')

# Follow

class FollowingTweetList(generics.ListAPIView):
    serializer_class = TweetSerializer
    permissions_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Get follows of the account
        follows = self.request.user.following.all()
        # Get the accounts that are followed
        accounts = []
        for follow in follows:
            accounts.append(follow.follow)
        
        tweets = Tweet.objects.filter(owner__in=accounts).order_by('-date_created')
        return tweets

class FollowingList(generics.ListAPIView):
    serializer_class = FollowingSerializer

    def get_queryset(self):
        follows = Follow.objects.filter(follower__pk=self.kwargs['pk'])
        return follows

class FollowerList(generics.ListAPIView):
    serializer_class = FollowerSerializer

    def get_queryset(self):
        followers = Follow.objects.filter(follow__pk=self.kwargs['pk'])
        return followers

class FollowAddRemove(generics.GenericAPIView):
    serializer_class = FollowSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        try:
            request.data['id_account']
        except Exception:
            return Response("No id_account was provided", status=status.HTTP_400_BAD_REQUEST)
        
        follower = request.user
        id_follow = request.data['id_account']
        # See if the follow users id is valid
        following = None
        try:
            following = Account.objects.get(pk=id_follow)
        except Exception: # If there is no account, return error
            return Response("No such user", status=status.HTTP_404_NOT_FOUND)
        
        try: # If there is a follow by this user, unfollow
            follow = Follow.objects.get(follower=follower, follow=following)

            # Update users
            following.follower_count -= 1
            following.save()
            follower.following_count -= 1
            follower.save()

            # Remove follow
            follow.delete()
            return Response("Unfollowed", status=status.HTTP_200_OK)
        except Exception: # Follow
            # Update users
            following.follower_count += 1
            following.save()
            follower.following_count += 1
            follower.save()

            # Create follow
            follow = Follow.objects.create(follower=follower, follow=following)
            return Response("Followed", status=status.HTTP_200_OK)

class IsFollowing(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk, *args, **kwargs):
        follower = request.user
        id_follow = pk
        following = Account.objects.get(pk=id_follow)
        try:
            Follow.objects.get(follower=follower, follow=following)
            return Response(True, status=status.HTTP_200_OK)
        except Exception:
            return Response(False, status=status.HTTP_200_OK)
