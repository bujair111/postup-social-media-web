from django.shortcuts import render
from .models import *
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import responses
from .serializer import *
from rest_framework.response import Response


# Create your views here.
@api_view(['POST'])
def signup(request):
    msg = ''
    try:
        params = request.data
        print('heloo')
        print(params)
        serilzData = UserSerializer(data=params)
        if serilzData.is_valid():
            serilzData.save()
            msg='signup sucsess'
            statuscode = 204
        else:
            msg= ' form error'
            statuscode= 403    
    except Exception as e:
        print(e)
        msg = 'sumting went wrong'
        statuscode = 505
    return JsonResponse({'statuscode': statuscode, 'msg': msg})


@api_view(['POST'])
def username_exist(request):
    params = request.data.get('username')  # Assuming the username is sent in the request data
    status = False  # Set default status to False

    if params:
        check = User.objects.filter(username=params).exists()
        status = True if check else False

    return JsonResponse({'status': status})

@api_view(['POST'])
def email_exist(request):
    params = request.data.get('email')  
    status = False 

    if params:
        check = User.objects.filter(email=params).exists()
        status = True if check else False

    return JsonResponse({'status': status})

@api_view(['POST'])
def userLogin(request):
    msg = ''
    data = request.data
    print(data)
    username = data['loginusername']
    password = data['loginpassword']
    print(username, password)
    try:
        user = User.objects.get(username=username, password=password)

        if user is not None:
            return JsonResponse({'msg': 'login success','statuscode':201,'token':'user_token','userId':user.id})
    except User.DoesNotExist:
        msg = 'Invalid username or password'
        return JsonResponse({'msg': msg,'statuscode':404})
    except:
        msg = 'Something went wrong'
        return JsonResponse({'msg': msg,'statuscode':500})


    
