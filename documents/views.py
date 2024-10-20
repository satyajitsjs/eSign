from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Document
from .serializers import DocumentSerializer
from django.shortcuts import get_object_or_404
import base64
from django.core.files.base import ContentFile


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_document_view(request):
    if request.method == 'POST':
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_documents_view(request):
    if request.method == 'GET':
        documents = Document.objects.filter(owner=request.user)
        serializer = DocumentSerializer(documents, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def retrieve_document_view(request, pk):
    document = get_object_or_404(Document, pk=pk, owner=request.user)
    serializer = DocumentSerializer(document)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def upload_signature_view(request, pk):
    document = get_object_or_404(Document, pk=pk, owner=request.user)
    
    signature_data = request.data.get('signature')
    signature_type = request.data.get('signature_type', 'draw')  
    
    if not signature_data:
        return Response({'error': 'Signature is required'}, status=status.HTTP_400_BAD_REQUEST)

    if signature_type == 'draw':
        format, imgstr = signature_data.split(';base64,')  
        ext = format.split('/')[-1]  
        data = ContentFile(base64.b64decode(imgstr), name=f'signature_{document.id}.{ext}')
        document.signature.save(data.name, data)  
    elif signature_type == 'type':
        document.typed_signature = signature_data

    document.signed = True
    document.save()
    
    serializer = DocumentSerializer(document)
    return Response(serializer.data, status=status.HTTP_200_OK)
