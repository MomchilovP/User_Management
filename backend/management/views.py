from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination

from .models import Locator
from .serializers import MyUserSerializer, LocatorSerializer

class ListLocators(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Locator.objects.all()
    serializer_class = LocatorSerializer


class BasicPagination(PageNumberPagination):
    page_size_query_param = 'limit'


class MyUser:
    def __init__(self, uid, username, email):
        self.id = uid
        self.username = username
        self.email = email


class UsersList(APIView):
    pagination_class = BasicPagination
    serializer_class = MyUserSerializer

    @property
    def paginator(self):
        if not hasattr(self, '_paginator'):
            if self.pagination_class is None:
                self._paginator = None
            else:
                self._paginator = self.pagination_class()
        else:
            pass
        return self._paginator

    def paginate_queryset(self, queryset):
        if self.paginator is None:
            return None
        return self.paginator.paginate_queryset(queryset, self.request, view=self)

    def get_paginated_response(self, data):
        assert self.paginator is not None
        return self.paginator.get_paginated_response(data)
    
    def get(self, request, format=None, *args, **kwargs):
        usernames = [MyUser(user.id, user.username, user.email) for user in User.objects.all()]

        page = self.paginate_queryset(usernames)

        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(usernames, many=True)
        return Response(serializer.data)