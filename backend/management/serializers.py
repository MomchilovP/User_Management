from rest_framework import serializers
from .models import Locator

class LocatorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Locator
        fields = ('id', 'name', 'status', 'location', 'posted')


class MyUserSerializer(serializers.Serializer):
    id = serializers.CharField()
    username = serializers.CharField()
    email = serializers.CharField()