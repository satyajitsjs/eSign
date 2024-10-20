import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('access_token');
      await axios.post('http://localhost:8000/api/documents/upload/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Document uploaded successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Document upload failed');
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Document</h2>
      <form onSubmit={handleUpload} className="upload-form">
        <input type="file" onChange={handleFileChange} required className="file-input" />
        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
};

export default DocumentUpload;