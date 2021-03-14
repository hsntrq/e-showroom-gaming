# Generated by Django 3.1.6 on 2021-03-09 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20210307_2149'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, null=True, upload_to='products/ ')),
            ],
        ),
    ]
