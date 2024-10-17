from django.urls import path
from .views import upload_document_view, list_documents_view

urlpatterns = [
    path('upload/', upload_document_view, name='document-upload'),
    path('list/', list_documents_view, name='document-list'),
]
