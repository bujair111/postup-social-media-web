from django.urls import path
from . import views

urlpatterns = [
    path('newPost',views.newPost),
    path('allPost',views.allPost),
    path('edit',views.edit_profile),
    path('profile',views.view_profile),
    path('save',views.save_post),
    path('bookmark',views.view_saved_data),
    path('view/Post',views.view_post)
]