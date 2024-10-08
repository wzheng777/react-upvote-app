// src/App.jsx
import React from 'react';
import { UpvoteProvider, useUpvote } from './context/UpvoteContext';
import UpvoteList from './components/UpvoteList';
import './App.css'; 

const App = () => {
  const { upvoteLists, addList } = useUpvote();

  return (
    <div className="page-container">
      {upvoteLists.map((_, index) => (
        <UpvoteList key={index} listIndex={index} />
      ))}
      <button onClick={addList} className="add-list-button" >Add New Upvote List</button>
    </div>
  );
};

const WrappedApp = () => (
  <UpvoteProvider>
    <App />
  </UpvoteProvider>
);

export default WrappedApp;
