import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignatureCanvas from 'react-signature-canvas';
import './styles.css';

const DocumentSigning = () => {
  const [document, setDocument] = useState(null);
  const [signatureType, setSignatureType] = useState('draw'); // 'draw' or 'type'
  const [typedSignature, setTypedSignature] = useState('');
  const sigCanvas = useRef({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`http://localhost:8000/api/documents/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDocument(response.data);
      } catch (error) {
        toast.error('Failed to load document');
      }
    };

    fetchDocument();
  }, [id]);

  const handleSignatureTypeChange = (e) => {
    setSignatureType(e.target.value);
  };

  const handleTypedSignatureChange = (e) => {
    setTypedSignature(e.target.value);
  };

  const handleSign = async () => {
    let signatureData;
    if (signatureType === 'draw') {
      signatureData = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    } else {
      signatureData = typedSignature;
    }

    const formData = new FormData();
    formData.append('signature', signatureData);

    try {
      const token = localStorage.getItem('access_token');
      await axios.post(`http://localhost:8000/api/documents/sign/${id}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Document signed successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Document signing failed');
    }
  };

  if (!document) {
    return <div>Loading...</div>;
  }

  const isPDF = document.file.endsWith('.pdf');
  const documentURL = `http://localhost:8000${document.file}`;


  return (
    <div className="signing-container">
      <h2>Sign Document</h2>
      <div className="document-preview">
        {isPDF ? (
          <iframe src={documentURL} title="Document Preview" width="100%" height="500px"></iframe>
        ) : (
          <a href={documentURL} target="_blank" rel="noopener noreferrer">
            View Document
          </a>
        )}
      </div>
      <div className="signature-container">
        <label>Signature Type:</label>
        <select value={signatureType} onChange={handleSignatureTypeChange}>
          <option value="draw">Draw</option>
          <option value="type">Type</option>
        </select>
        {signatureType === 'draw' ? (
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          />
        ) : (
          <input
            type="text"
            value={typedSignature}
            onChange={handleTypedSignatureChange}
            placeholder="Type your signature"
          />
        )}
        <button onClick={handleSign}>Sign Document</button>
      </div>
    </div>
  );
};

export default DocumentSigning;