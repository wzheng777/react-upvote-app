// src/App.jsx
import React from 'react';
import { UpvoteProvider, useUpvote } from './context/UpvoteContext';
import UpvoteList from './components/UpvoteList';

const App = () => {
  const { upvoteLists, addList } = useUpvote();

  return (
    <div>
      {upvoteLists.map((_, index) => (
        <UpvoteList key={index} listIndex={index} />
      ))}
      <button onClick={addList}>Add New Upvote List</button>
    </div>
  );
};

const WrappedApp = () => (
  <UpvoteProvider>
    <App />
  </UpvoteProvider>
);

export default WrappedApp;
