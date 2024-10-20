import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
      startTokenRefresh();
    }
  }, [setIsAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsAuthenticated(false); 
    navigate('/');  
  };

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      handleLogout();
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/accounts/refresh/', {
        refresh: refreshToken,
      });
      localStorage.setItem('access_token', response.data.access);
      setIsAuthenticated(true); 
    } catch (error) {
      console.error('Failed to refresh token', error);
      handleLogout();
    }
  };

  const startTokenRefresh = () => {
    setInterval(refreshToken, 2000); 
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <div className="left-side">
            <li>
              <Link to="/">eSign</Link>
            </li>
          </div>
          <div className="right-side">
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/upload">Upload Document</Link>
                </li>
                <li>
                  <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;