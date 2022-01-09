from django.db import migrations, models

def create_dummy_tours(apps, schema_editor):
    TourModel = apps.get_model('api', 'Tour')
    TourModel.objects.create(
        company='Test Company',
        title='Cambridge Tour',
        description='Awesome Tour',
        dates=['21-05-2022', '24-05-2022'],
        price=10.99,
    )
    TourModel.objects.create(
        company='London Tours',
        title='London Big Bus',
        description='Awesome London Big Bus Tour',
        dates=['01-04-2022', '05-04-2022', '09-04-2022'],
        price=19.99,
    )
    TourModel.objects.create(
        company='Everest Tours',
        title='Extreme Mountain Tours',
        description='Everest climbing tour',
        dates=['22-08-2022', '23-08-2022', '24-08-2022', '25-08-2022'],
        price=19.99,
    )


def create_dummy_tours_rev(apps, schema_editor):
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(code=create_dummy_tours, reverse_code=create_dummy_tours_rev),
    ]
