from django.contrib import admin
from .models import Locator

class LocatorAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'status', 'location')

admin.site.register(Locator, LocatorAdmin)