# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-03 00:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('truck_tracker', '0002_user_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.CharField(max_length=12),
        ),
    ]
