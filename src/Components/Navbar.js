/* eslint-disable react/prop-types */
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { close, Nav } = props;
  return (
    <div className={Nav ? 'Navbar d-flex f-col a-center j-center show' : 'Navbar d-flex f-col a-center j-center'}>
      <button type="button" aria-label="hamburger" className="close-btn" onClick={close}><FaTimes /></button>
      <ul className="nav-links d-flex f-col j-center a-center">
        <li>
          <Link to="/" className="nav-link">To-do</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
