import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Login/Register</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/upload">Upload Document</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;