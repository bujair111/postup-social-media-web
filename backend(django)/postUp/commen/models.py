from django.db import models

class Postupadmin(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    
    class Meta:
        db_table = 'admin'


class User(models.Model):
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    username = models.CharField(max_length=30)
    gender = models.CharField(max_length=10,null=True)
    dob = models.CharField(max_length=15,null=True)
    bio = models.CharField(max_length=400, null=True)
    image = models.ImageField(upload_to='userimage/', null=True)
    password = models.CharField(max_length=30)

    class Meta:
        db_table = 'userdetails'