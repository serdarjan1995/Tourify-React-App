from django.db import models
import uuid

from django.template.defaultfilters import truncatechars


class Tour(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    dates = models.JSONField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['created_at']

    @property
    def short_description(self):
        return truncatechars(self.description, 50)

    def __str__(self):
        return u'%s' % self.title
