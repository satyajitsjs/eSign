from django.urls import path
from .views import *

urlpatterns = [
    path('upload/', upload_document_view, name='document-upload'),
    path('list/', list_documents_view, name='document-list'),
    path('<int:pk>/', retrieve_document_view, name='document-retrieve'),
    path('sign/<int:pk>/', upload_signature_view, name='document-sign'),
]