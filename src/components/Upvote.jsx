// src/components/Upvote.jsx
import React from 'react';
import './Upvote.css';

const Upvote = ({ isSelected, onToggle }) => {
  return (
    <button
      className={`upvote-item ${isSelected ? 'selected' : ''}`}
      onClick={onToggle}
    >
      {/* Directly embedding the SVG markup */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor" // Use currentColor to allow CSS control
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="upvote-arrow" // Ensure class is set to manipulate with CSS
      >
        <path d="M12 19V6M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default Upvote;
