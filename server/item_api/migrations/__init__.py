from django.db import migrations

def create_data(apps, schema_editor):
    item = apps.get_model('item')
    item(name = "N/A", location = "N/A", shelf = "N/A", amount ="N/A").save()

class Migration(migrations.Migration):

    dependencies = [
        ('item', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]