from django.db import models
from commen.models import User
import datetime

# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    image = models.ImageField(upload_to='userImage/')
    blogHead = models.CharField(max_length=200)
    blogBody = models.CharField(max_length=1000)
    category = models.CharField(max_length=30)
    time = models.DateField(default=datetime.date.today)
    class Meta:
        db_table = 'poste'
    print(time)    


class Bookmarks(models.Model):
    userId = models.ForeignKey(User, on_delete = models.CASCADE)
    postId = models.ForeignKey(Post, on_delete = models.CASCADE)
    class Meta:
        db_table = 'bookmarks'