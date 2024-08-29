// src/components/AddButton.jsx
import React from 'react';
import './AddButton.css';
import plusIcon from '../assets/icons/plus.svg';

const AddButton = ({ onAdd }) => {
  return (
    <button className="add-button" onClick={onAdd}>
      <img src={plusIcon} alt="Add" />
    </button>
  );
};

export default AddButton;
