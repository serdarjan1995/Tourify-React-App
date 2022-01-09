from django.contrib import admin
from app.api.models import Tour


class TourAdmin(admin.ModelAdmin):
    search_fields = ['id', 'company', 'title', 'description']
    list_display = ('id', 'company', 'title', 'short_description', 'dates', 'price', 'created_at', 'updated_at')
    readonly_fields = ('id', 'created_at', 'updated_at')


admin.site.register(Tour, TourAdmin)
