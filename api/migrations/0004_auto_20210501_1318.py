# Generated by Django 3.0.5 on 2021-05-01 08:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210501_1303'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderlist',
            old_name='orderid',
            new_name='order',
        ),
    ]