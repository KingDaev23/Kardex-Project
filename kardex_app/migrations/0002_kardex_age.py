# Generated by Django 4.1.1 on 2022-10-10 04:32

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kardex_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='kardex',
            name='age',
            field=models.IntegerField(null=True, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)]),
        ),
    ]
