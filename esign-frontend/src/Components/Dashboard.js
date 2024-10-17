import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.css';

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:8000/api/documents/list/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDocuments(response.data);
      } catch (error) {
        toast.error('Failed to load documents');
      }
    };
    fetchDocuments();
  }, []);

  const handleUpload = () => {
    navigate('/upload');
  };

  return (
    <div className="dashboard-container">
      <h2>Documents Dashboard</h2>
      <button onClick={handleUpload}>Upload New Document</button>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>
            <Link to={`/documents/${doc.id}`}>
              {doc.file} - {doc.is_signed ? 'Signed' : 'Not Signed'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;