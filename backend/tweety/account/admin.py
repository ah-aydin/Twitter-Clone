from django.contrib import admin
from .models import Account, Follow

class AccountAdmin(admin.ModelAdmin):
    list_display = ['email', 'username', 'name', 'last_name']
    search_fields = ['email', 'username', 'name', 'last_name']
    readonly_fields = ['date_joined', 'last_login', 'follower_count', 'following_count']
    fieldsets = [
        (None, {'fields': ['email', 'username', 'name', 'last_name']}),
        ('Account details', {'fields': ['date_joined', 'last_login']}),
        ('Follow', {'fields': ['follower_count', 'following_count']}),
        ('Other', {'fields': ['is_admin', 'is_active', 'is_staff', 'is_superuser']})
    ]

class FollowAdmin(admin.ModelAdmin):
    list_display = ['follower', 'follow']
    search_fields = ['follower__username', 'follow__username',
                     'follower__email', 'follow__email']
    readonly_fields = list_display
    filedsets = [
        (None, {'fields': ['follower', 'follow']})
    ]

admin.site.register(Account, AccountAdmin)
admin.site.register(Follow, FollowAdmin)