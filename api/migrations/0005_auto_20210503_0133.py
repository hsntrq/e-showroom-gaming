# Generated by Django 3.0.5 on 2021-05-02 20:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210501_1318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderlist',
            name='order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Order'),
        ),
    ]
