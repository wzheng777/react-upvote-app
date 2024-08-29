// src/components/UpvoteList.jsx
import React from 'react';
import Upvote from './Upvote';
import AddButton from './AddButton';
import { useUpvote } from '../context/UpvoteContext';
import './UpvoteList.css';

const UpvoteList = ({ listIndex }) => {
  const { upvoteLists, toggleUpvotesInList, addUpvoteToList } = useUpvote();

  // Get the upvotes for the current list
  const upvotes = upvoteLists[listIndex];

  return (
    <div className="upvote-list-container">
        {Array.isArray(upvotes) && ( // Check if upvotes is an array before rendering
      <div className="upvote-items">
        {upvotes &&  upvotes.map((isSelected, index) => (
          <Upvote
            key={index}
            isSelected={isSelected}
            onToggle={() => toggleUpvotesInList(listIndex)} // Toggle all upvotes in the list
          />
        ))}
      </div>
      )}
      <AddButton onAdd={() => addUpvoteToList(listIndex)} />
    </div>
  );
};

export default UpvoteList;
