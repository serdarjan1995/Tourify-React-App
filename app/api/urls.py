from django.urls import include, path
from rest_framework import routers
from app.api.views import TourViewSet, GetUserViewSet

router = routers.DefaultRouter()
router.register(r'tours', TourViewSet)
router.register(r'user', GetUserViewSet)

TourViewSet.get_extra_actions()

urlpatterns = [
    path('', include(router.urls)),
]
