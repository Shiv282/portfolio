// components/Snackbar.js
import React, { useEffect, useState } from 'react';

const Snackbar = ({ message, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div className="fixed bottom-4 right-4 transform -translate-x-1/2 bg-green-800 text-white px-4 py-2 rounded shadow-lg z-50">
        {message}
      </div>
    )
  );
};

export default Snackbar;
