from django.apps import AppConfig


class ApiConfig(AppConfig):
    name = 'app.api'
    def ready(self):
        import app.api.signals