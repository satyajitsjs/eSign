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
      <button onClick={handleUpload} className="upload-button">Upload New Document</button>
      <table className="document-table">
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className="document-item">
              <td className="document-name">
              <Link to={`/documents/${doc.id}`}>
                {doc.file.split('/').pop()}
              </Link>
              </td>
              <td>
                <Link to={`/documents/${doc.id}`} className={`document-status ${doc.signed ? 'signed' : 'not-signed'}`}>
                  {doc.signed ? 'Signed' : 'Not Signed'}
                </Link>
              </td>
              <td>
                <a href={`http://localhost:8000${doc.file}`} download className="download-button">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;