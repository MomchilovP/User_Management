import firebase_admin
from firebase_admin import credentials, auth
from django.contrib.auth.models import User
from rest_framework import authentication
from .exceptions import *


cred = credentials.Certificate("firebase.json")
default_app = firebase_admin.initialize_app(cred)


class FirebaseAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.META.get("HTTP_AUTHORIZATION")
        if not auth_header:
            raise NoAuthToken("No auth token provided")

        id_token = auth_header.split(" ").pop()
        decoded_token = None
        try:
            decoded_token = auth.verify_id_token(id_token)
            print(f'Info about the token: {decoded_token}')
        except Exception:
            raise InvalidAuthToken("Invalid auth token")

        if not id_token or not decoded_token:
            return None

        try:
            uid = decoded_token.get("uid")
            email = decoded_token.get("email")
            name = decoded_token.get("name")
        except Exception:
            raise FirebaseError()

        user = User.objects.get_or_create(username=uid)
        # users = []
        # for user in auth.list_users().iterate_all():
        #     users.append({'uid': user.uid, 'email': user.email})
        
        if email == 'aragore51@gmail.com':
            auth.set_custom_user_claims(uid, {'admin': True})
        else:
            auth.set_custom_user_claims(uid, {'admin': False})

        return (user, None)

