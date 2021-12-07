from django.urls import path, include
from rest_framework import routers
from .views import ListLocators, UsersList

router = routers.DefaultRouter()
router.register('locators', viewset=ListLocators)

urlpatterns = [
    path('', include(router.urls)),
    path('users/', UsersList.as_view())
]