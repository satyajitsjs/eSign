from django.db import models
from django.contrib.auth.models import User

# Create your models here.
def user_directory_path(instance, filename):
    return f'documents/user_{instance.owner.id}/{filename}'

def signature_directory_path(instance, filename):
    return f'signatures/user_{instance.owner.id}/{filename}'

class Document(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to=user_directory_path)
    signed = models.BooleanField(default=False)
    signature = models.ImageField(upload_to=signature_directory_path, null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
