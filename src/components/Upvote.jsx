// src/components/Upvote.jsx
import React from 'react';
import './Upvote.css';
import arrowUp from '../assets/icons/arrow-up.svg';

const Upvote = ({ isSelected, onToggle }) => {
  return (
    <div
      className={`upvote-item ${isSelected ? 'selected' : ''}`}
      onClick={onToggle} // Handle toggle on click
    >
      <img
        src={arrowUp}
        alt="Upvote"
        className={`upvote-arrow ${isSelected ? 'arrow-selected' : ''}`}
      />
    </div>
  );
};

export default Upvote;
