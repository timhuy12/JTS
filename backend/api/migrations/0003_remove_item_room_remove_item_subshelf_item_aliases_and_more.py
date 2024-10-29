# Generated by Django 5.1.2 on 2024-10-27 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_item_amount'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='room',
        ),
        migrations.RemoveField(
            model_name='item',
            name='subShelf',
        ),
        migrations.AddField(
            model_name='item',
            name='aliases',
            field=models.CharField(default='unknown', max_length=240, verbose_name='Aliases'),
        ),
        migrations.AddField(
            model_name='item',
            name='location',
            field=models.CharField(default='unknown', max_length=240, verbose_name='Location'),
        ),
        migrations.AlterField(
            model_name='item',
            name='amount',
            field=models.IntegerField(default='unknown', verbose_name='Amount'),
        ),
        migrations.AlterField(
            model_name='item',
            name='name',
            field=models.CharField(default='unknown', max_length=240, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='item',
            name='shelf',
            field=models.CharField(default='unknown', max_length=240, verbose_name='Shelf'),
        ),
    ]
