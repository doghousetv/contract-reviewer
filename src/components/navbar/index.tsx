import React from 'react';

const NavBar = () => {
  return (
    <nav className="w-full p-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <img 
          src="/contact_logo.svg"
          alt="Contact Logo"
          className="h-6 w-auto"
        />
        <img 
          src="/patchbay_logo.png"
          alt="Patchbay Logo"
          className="h-6 w-auto"
        />
        <img 
          src="/account_logo.svg"
          alt="Account Logo"
          className="h-8 w-auto"
        />
      </div>
    </nav>
  );
};

export default NavBar;
