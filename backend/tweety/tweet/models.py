from django.db import models
from django.conf import settings

class Tweet(models.Model):
    owner               = models.ForeignKey(
                            settings.AUTH_USER_MODEL, 
                            related_name='tweets', 
                            on_delete=models.CASCADE, 
                            null=False, 
                            editable=False
                        )
    date_created        = models.DateTimeField(auto_now_add=True, editable=False)
    content             = models.TextField()
    like_count          = models.IntegerField(default=0, editable=False)
    retweet             = models.ForeignKey('tweet.Tweet', related_name='reply_tweet', on_delete=models.CASCADE, null=True)

    def get_short_content(self):
        """
        Return first 20 characters of the content to be displayed in admin panel
        """
        if len(self.content) < 20:
            return self.content
        return self.content[:20]

    def __str__(self):
        return f"{self.owner.username} - {self.get_short_content()}"

class Like(models.Model):
    owner               = models.ForeignKey(
                            settings.AUTH_USER_MODEL,
                            related_name='likes',
                            on_delete=models.CASCADE,
                            null=False,
                            editable=False
                        )
    tweet               = models.ForeignKey(
                            Tweet,
                            related_name='likes',
                            on_delete=models.CASCADE,
                            null=False,
                            editable=False
                        )
    date_created        = models.DateTimeField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return str(self.owner) + ' ' + str(self.tweet)
