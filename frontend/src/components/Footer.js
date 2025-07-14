import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 mt-10">
      <div className="container mx-auto px-6 text-center text-sm text-gray-600">
        <p className="mb-2">
          © 2025 <strong>Excel Analytics</strong> | Built by Yogiraj Govind Makar
        </p>
        <div className="flex justify-center space-x-4 text-blue-600">
          <a
            href="https://www.microsoft.com/en-us/microsoft-365/excel"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Excel Official
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;