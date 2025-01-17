# Generated by Django 5.1.2 on 2024-10-17 04:24

import documents.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='file',
            field=models.FileField(upload_to=documents.models.user_directory_path),
        ),
        migrations.AlterField(
            model_name='document',
            name='signature',
            field=models.ImageField(blank=True, null=True, upload_to=documents.models.signature_directory_path),
        ),
    ]
