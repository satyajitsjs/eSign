import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthPage from './Components/AuthPage';
import Dashboard from './Components/Dashboard';
import DocumentUpload from './Components/DocumentUploads';
import DocumentSigning from './Components/DocumentSigning';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import './Components/styles.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage isLogin={true} onAuthSuccess={setIsAuthenticated} />} />
          <Route path="/register" element={<AuthPage isLogin={false} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<DocumentUpload />} />
          <Route path="/documents/:id" element={<DocumentSigning />} />
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