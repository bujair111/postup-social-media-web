from django.urls import path
from . import views

urlpatterns = [
    path('signup',views.signup),
    path('username',views.username_exist),
    path('email',views.email_exist),
    path('user/login',views.userLogin)
]