from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    skills = models.JSONField(default=list)  # or use ManyToMany for relational data
    REQUIRED_FIELDS = ['email']  # For createsuperuser

    def __str__(self):
        return self.email

class Skill(models.Model):
    name = models.CharField(max_length=100, unique=True)
    users = models.ManyToManyField(User, related_name='user_skills')

    def __str__(self):
        return self.name
