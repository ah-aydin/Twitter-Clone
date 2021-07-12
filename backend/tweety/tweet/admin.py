from django.contrib import admin
from .models import Tweet, Like

class TweetAdmin(admin.ModelAdmin):
    list_display = ['owner', 'date_created', 'like_count']
    search_fields = ['owner', 'content', 'like_count']
    readonly_fields = ['owner', 'date_created', 'retweet', 'like_count']
    fieldsets = [
        (None, {'fields': ['owner', 'date_created']}),
        ('Properties', {'fields' : ['content', 'like_count']}),
        ('Retweet', {'fields': ['retweet']})
    ]

admin.site.register(Tweet, TweetAdmin)
admin.site.register(Like)