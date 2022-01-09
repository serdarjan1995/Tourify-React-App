#!/bin/bash
echo 'Collecting static files'
python manage.py collectstatic --no-input

echo 'Making migrations'
python manage.py makemigrations --no-input --skip-checks

echo 'Migrating'
python manage.py migrate --no-input --skip-checks

echo 'Creating superuser'
echo "from django.contrib.auth.models import User; User.objects.create_superuser(username='admin', email='admin@example.com', password='adminPassword')" | python manage.py shell

echo 'Starting gunicorn server'
gunicorn app.wsgi --bind 0.0.0.0:8000 --workers 3