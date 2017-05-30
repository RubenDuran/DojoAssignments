from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):

    def validate(self, post):
        errors = []
        if len(post['f_name']) < 2:
            errors.append('first name must be at least 2 characters long')
        if not post['f_name'].isalpha():
            errors.append('first name can only contain letters')
        if len(post['l_name']) < 2:
            errors.append('first name must be at least 2 characters long')
        if not post['l_name'].isalpha():
            errors.append('last name can only contain letters')
        if not EMAIL_REGEX.match(post['email']):
            errors.append('Invalid Email Address!')
        if len(post['pw']) < 8:
            errors.append('password must be at least 8 characters long')
        if post['pw'] != post['pwconf']:
            errors.append('password and confirmation fields do not match')
        check_email = self.filter(email=post['email'])
        if check_email:
            errors.append('email already exist in the database')
        return errors

    def signin(self, post):
        errors = []
        if not EMAIL_REGEX.match(post['email']):
            errors.append('Invalid Email Address!')
        elif len(post['pw']) < 8:
            errors.append('password must be at least 8 characters long')
        else:
            email = post['email']
            pw = post['pw']
            check_email = self.filter(email=post['email'])
            if not check_email:
                errors.append('no such user in database')
            else:
                pw_check = self.get(email=post['email'])
                if pw != pw_check.password:
                    errors.append('Incorect Password for user')
                else:
                    pass
        return errors

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = UserManager()

class Post(models.Model):
    user = models.ForeignKey('User')
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Like(models.Model):
    user = models.ForeignKey('User')
    post = models.ForeignKey('Post')
    content = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
