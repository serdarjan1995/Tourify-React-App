from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from app.api.models import Tour
from app.api.serializers import TourSerializer, UserSerializer


@method_decorator(csrf_exempt, name='dispatch')
class TourViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
    """
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    permission_classes = [permissions.IsAuthenticated]


@method_decorator(csrf_exempt, name='dispatch')
class GetUserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list`, `retrieve`, actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kwargs):
        if request.user:
            return Response({'username': request.user.username})

        return Response({}, status=404)
