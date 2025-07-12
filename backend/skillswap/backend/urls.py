from django.urls import path
from .views import RegisterView, LoginView, SkillView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('skills/', SkillView.as_view(), name='skills'),
]
