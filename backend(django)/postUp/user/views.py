from django.shortcuts import render
from .models import *
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import responses
from .serializer import *
from rest_framework.response import Response
from django.core.serializers.json import DjangoJSONEncoder
import json


# Create your views here.
@api_view(['POST'])
def newPost(request):
    msg = ''    
    try:
        params = request.data
        print(params)
        serializedData = NewPostSerializer(data=params)
        try:
            serializedData.is_valid()
            serializedData.save()
            statuscode = 204
            msg = 'post successful updated'
            # except Exception as e:
            # print(e)
        except:
            print(serializedData.errors)
            msg = ' form error' 
            statuscode = 403        
    except:
        msg = 'something went wrong ' 
        statuscode = 505  
    return JsonResponse({'statuscode':statuscode, 'msg':msg})


@api_view(['GET'])    
def allPost(request):
    try:
        allposts = Post.objects.select_related('user').all()
        serializeddata = ViewPostSerializer(allposts, many=True)
        data = serializeddata.data  # Serialize the data using .data attribute

        statuscode = 200
        return JsonResponse({'statuscode': statuscode, 'data': data})    

    except Exception as f:
        print(f)
        statuscode = 500
        return JsonResponse({'statuscode': statuscode, 'data': []})

@api_view(['POST'])
def edit_profile(request):
    params= request.data
    user_id = params['user']
    try:
        user_details = User.objects.get(id=user_id)
    except user_details.DoesNotExist:
        return JsonResponse({'statusCode': 404, 'msg': 'User not found'})

    serialized_data = UpdateUserSerializer(user_details, data=params)
    if serialized_data.is_valid():
        serialized_data.save()
        return JsonResponse({'statusCode': 200, 'msg': 'User details updated successfully'})
    else:
        return JsonResponse({'statusCode': 400, 'msg': 'Invalid data'})

@api_view(['GET'])
def view_profile(request):
    token = request.query_params.get('token')
    print(token)
    try:

        # user post details
        user_post_details = Post.objects.filter(user_id = token)
        serialized_data = NewPostSerializer(user_post_details,  many=True)
        post_data = serialized_data.data

        # user details
        user_details = User.objects.get(id = token)
        serialized_user_data = UserSerializer(user_details)
        user_data = serialized_user_data.data

        statuscode = 200
        return JsonResponse({ 'statuscode': statuscode, 'post_data': post_data, 'user_data': user_data })
    except:
        statuscode = 500
        return JsonResponse({ 'statuscode': statuscode, 'post_data': [], 'user_data': [] })
    
@api_view(['POST'])    
def save_post(request):
    params = request.data
    user_id = params['userId']
    post_id = params['postId']
    try:
        check = Bookmarks.objects.filter(userId = user_id, postId = post_id).exists()
        if check:
            print('tru')
            return JsonResponse({'statuscode': 400, 'msg': 'already saved'})
        else:
            serializedData = SavePostSerializer(data= params)
            if serializedData.is_valid():
                serializedData.save()
                return JsonResponse({'statuscode': 200, 'msg': 'saved'})
            else:
                return JsonResponse({'statuscode': 404, 'msg': 'error'})
    except:
        return JsonResponse({'statuscode': 500, 'msg': 'something went wrong '})

@api_view(['GET'])    
def view_saved_data(request):
    user = request.query_params.get('userId')
    try:
        saved_datas = Bookmarks.objects.select_related('postId').filter(userId = user)
        serialized_saved_data =viewSavePostSerializer(saved_datas, many= True )
        data = serialized_saved_data.data
        
        return JsonResponse({'statuscode': 200, 'msg': 'oky', 'data': data})
    except Exception as e:
        print(e)
        return JsonResponse({'statuscode': 500, 'msg': 'something went wrong', 'data': []})
    

@api_view(['GET'])    
def view_post(request):
    post_id = request.query_params.get('postId')
    print(post_id)
    try:
        allposts = Post.objects.select_related('user').get(id= post_id )
        serializeddata = ViewPostSerializer(allposts)
        data = serializeddata.data  # Serialize the data using .data attribute
        print(data)
        statuscode = 200
        return JsonResponse({'statuscode': statuscode, 'data': data})    

    except Exception as f:
        print(f)
        statuscode = 500
        return JsonResponse({'statuscode': statuscode, 'data': []})
    return Response('heloo')
