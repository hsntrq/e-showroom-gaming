# Generated by Django 3.0.5 on 2021-05-01 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='cashOnDelivery',
            field=models.BooleanField(default=True),
        ),
    ]
