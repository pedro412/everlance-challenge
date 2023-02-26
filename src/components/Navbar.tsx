import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="shadow-md h-20 flex items-center">
      <Link to="/">
        <div className="flex items-center px-14">
          <img src={logo} className="mr-4" alt="logo" />
          <h1 className="font-medium text-body">Everlance Inc.</h1>
        </div>
      </Link>
    </nav>
  );
};
