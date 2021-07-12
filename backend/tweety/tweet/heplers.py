from .models import Tweet

def get_tweet(pk):
    """
    Returns the tweet that is given in the url pk
    """
    tweet = None
    try:    tweet = Tweet.objects.get(pk=pk)
    except: tweet = None
    return  tweet