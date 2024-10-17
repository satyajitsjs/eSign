import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthPage from './Components/AuthPage';
import Dashboard from './Components/Dashboard';
import DocumentUpload from './Components/DocumentUploads';
import DocumentSigning from './Components/DocumentSigning';
import DocumentPreview from './Components/DocumentPreview';
import Header from './Components/Header';
import './Components/styles.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<DocumentUpload />} />
          <Route path="/documents/:id" element={<DocumentSigning />} />
          <Route path="/preview/:id" element={<DocumentPreview />} />
        </Routes>
      </Router>

      <ToastContainer 
        position="top-right"
        autoClose={3000} 
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;