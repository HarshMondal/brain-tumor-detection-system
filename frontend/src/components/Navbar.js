/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Guest' };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">Brain-Tumor Detection System</a>
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/homepage">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Coming Soon
            </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/partnered-hospitals">Partnered Hospitals</Link>
              <Link className="dropdown-item" to="/doctor-review">Doctor Review</Link>
              <Link className="dropdown-item" to="/tumor-models">Different Tumor Models</Link>
            </div>
            </li>
            </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button onClick={() => {
              // Implement logout functionality here
              console.log('Logging out...');
              localStorage.clear();
              window.location.href = '/'; // Redirect to home or login page
            }} className="btn btn-primary btn-sm">
              Logout
            </button>
          </li>
          <li className="nav-item">
            <span className="navbar-text ml-2">
              {user.name || 'Guest'}
            </span>
          </li>
        </ul>
             </div>
    </nav>
  );
}

export default Navbar;

