from django.db import models


class UserManager(models.Manager):
    def validate(self, username):
        errors = []
        if len(username) < 8:
            errors.append('username must be at least 8 characters long')
        if len(username) > 16:
            errors.append('username cannot be more than 16 characters long')
        check_user = self.filter(username=username)
        if check_user:
            errors.append('username already exist in the database')
        return errors


class User(models.Model):
    username = models.CharField(max_length= 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()
