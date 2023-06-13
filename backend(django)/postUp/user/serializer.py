from rest_framework import serializers

from commen.serializer import UserSerializer
from .models import *

class NewPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields =  '__all__'

class ViewPostSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Post
        fields =  '__all__'        

class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'phone', 'image', 'username', 'bio', 'dob', 'gender']

class SavePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmarks
        fields =  '__all__'

class viewSavePostSerializer(serializers.ModelSerializer):
    postId = NewPostSerializer()
    class Meta:
        model = Bookmarks
        fields =  '__all__'                 