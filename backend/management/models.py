from django.db import models

# Create your models here.

class Locator(models.Model):

    class LocatorObject(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='active')

    options = (
        ('disabled', 'Disabled'),
        ('enabled', 'Enabled'),
    )

    name = models.CharField(max_length=30)
    posted = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=10, choices=options, default='Enabled')
    location = models.CharField(max_length=50)
    objects = models.Manager()  # default manager
    locator_objects = LocatorObject()  # custom manager

    class Meta:
        ordering = ('posted',)

    def __str__(self):
        return self.name
