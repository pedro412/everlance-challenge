import React from 'react';
import logo from '../logo.svg';

export const Navbar = () => {
  return (
    <nav className="shadow-md h-20 flex items-center px-14">
      <img src={logo} className="mr-6" alt="logo" />
      <h1 className="font-medium text-body">Everlance Inc.</h1>
    </nav>
  );
};
