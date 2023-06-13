# Generated by Django 4.1.7 on 2023-06-10 06:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('commen', '0001_initial'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bookmarks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('postId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.post')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='commen.user')),
            ],
            options={
                'db_table': 'bookmarks',
            },
        ),
    ]
