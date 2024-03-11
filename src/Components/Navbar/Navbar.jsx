import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../Assets/princeglobaltrade.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="nav-logo">
          <img src={logo} alt="Navbar" />
        </div>
      </Link>
      <ul className="nav-menu">
        <li onClick={() => { setMenu('home'); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === 'home' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('aboutus'); }}>
          <Link style={{ textDecoration: 'none' }} to='/aboutus'>AboutUs</Link>
          {menu === 'aboutus' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('OurTeam'); }}>
          <Link style={{ textDecoration: 'none' }} to='/ourteam'>OurTeam</Link>
          {menu === 'OurTeam' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('contactus'); }}>
          <Link style={{ textDecoration: 'none' }} to='/contactus'>ContactUs</Link>
          {menu === 'contactus' ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;