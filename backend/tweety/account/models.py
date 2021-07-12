from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class AccountManager(BaseUserManager):
    def create_user(self, email, username, name, last_name, password=None):
        if not email:       raise ValueError("An email must be provided")
        if not username:    raise ValueError("A username must be provided")
        if not name:        raise ValueError("A name must be provided")
        if not last_name:   raise ValueError("A last name must be provided")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            name=name,
            last_name=last_name
        )
        user.is_active = False

        user.set_password(password)
        user.save()
        return user


    def create_superuser(self, email, username, name, last_name, password=None):
        user = self.create_user(email, username, name, last_name, password)

        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save()

        return user

class Account(AbstractBaseUser):
    # General fields
    email               = models.EmailField(max_length=100, unique=True)
    username            = models.CharField(max_length=100, unique=True)
    name                = models.CharField(max_length=100, default='')
    last_name           = models.CharField(max_length=100, default='')
    follower_count      = models.IntegerField(default=0, editable=0)
    following_count     = models.IntegerField(default=0, editable=0)
    
    # Account details
    date_joined         = models.DateField(verbose_name='date joined', auto_now_add=True, editable=False)
    last_login          = models.DateField(verbose_name='last login', auto_now=True, editable=False)

    # Requierd fields by django
    is_admin            = models.BooleanField(default=False)
    is_active           = models.BooleanField(default=False)
    is_staff            = models.BooleanField(default=False)
    is_superuser        = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'name', 'last_name']

    objects = AccountManager()

    def __str__(self):
        return f"{self.email} - {self.username} - {self.name} {str.capitalize(self.last_name)}"
    
    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

class Follow(models.Model):
    follower            = models.ForeignKey(
                            Account,
                            related_name='following',
                            on_delete=models.CASCADE,
                            null=False,
                            editable=False
                        )
    follow           = models.ForeignKey(
                            Account,
                            related_name='followers',
                            on_delete=models.CASCADE,
                            null=False,
                            editable=False
                        )
    
    def __str__(self):
        return f"{self.follower.username} following {self.follow.username}"
