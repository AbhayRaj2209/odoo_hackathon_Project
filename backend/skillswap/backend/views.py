from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer

from rest_framework.permissions import IsAuthenticated

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class SkillView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        skills = request.user.skills  # or Skill.objects.filter(users=request.user)
        return Response({'skills': skills})

    def post(self, request):
        skill_name = request.data.get('name')
        if skill_name:
            skill, created = Skill.objects.get_or_create(name=skill_name)
            skill.users.add(request.user)
            return Response({'status': 'Skill added'})
        return Response({'error': 'Skill name required'}, status=400)
