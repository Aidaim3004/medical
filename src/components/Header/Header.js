import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/works">Works</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/benefits">Benefits</Link>
      </nav>
    </header>
  );
};

export default Header;