import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const DocumentPreview = () => {
  const { id } = useParams();
  const [document, setDocument] = useState(null);

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
        console.error('Error fetching document');
      }
    };

    fetchDocument();
  }, [id]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="preview-container">
      <h2>Document Preview</h2>
      <a href={document.file} download>
        Download Document
      </a>
    </div>
  );
};

export default DocumentPreview;