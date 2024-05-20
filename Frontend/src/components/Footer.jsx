// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white text-center">
      {/* <div className="mb-4">
        <a href="/about" className="mx-2 hover:text-gray-400">About</a>
        <a href="/contact" className="mx-2 hover:text-gray-400">Contact</a>
      </div> */}
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-300"><i className="fab fa-twitter fa-2x"></i></a>
        <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-500"><i className="fab fa-instagram fa-2x"></i></a>
      </div>
      <p>&copy; Wing Chi Lam All rights reserved.</p>
    </footer>
  );
};

export default Footer;
