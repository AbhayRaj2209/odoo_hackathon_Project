import os
import sys

from dotenv import load_dotenv
load_dotenv()


# skillswap/settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    'users',
    'skills',
    'exchanges',
    'chat',
    'reviews',
    
    'rest_framework',
    'corsheaders',
    'allauth',
]

# Database (PostgreSQL)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'skillswap_db',
        'USER': 'skillswap_user',
        'PASSWORD': 'djangoreact',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# JWT Authentication
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}


SECRET_KEY = os.getenv('SECRET_KEY')
DATABASES['default']['PASSWORD'] = os.getenv('DB_PASSWORD')
