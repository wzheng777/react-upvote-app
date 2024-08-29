// src/context/UpvoteContext.jsx
import React, { createContext, useContext, useState, useEffect} from 'react';

// Create context
const UpvoteContext = createContext();

// Custom hook to use the Upvote context
export const useUpvote = () => {
  return useContext(UpvoteContext);
};

// Context provider component
export const UpvoteProvider = ({ children }) => {
  const [upvoteLists, setUpvoteLists] = useState(() => {
    const savedLists = localStorage.getItem('upvoteLists');
    return savedLists ? JSON.parse(savedLists) : [[false]]; // Initialize with one upvote
  });

  // Persist data to local storage whenever upvoteLists changes
  useEffect(() => {
    localStorage.setItem('upvoteLists', JSON.stringify(upvoteLists));
  }, [upvoteLists]);

  // Function to toggle the state of all upvotes in a specific list
  const toggleUpvotesInList = (listIndex) => {
    setUpvoteLists((prevLists) =>
      prevLists.map((list, i) =>
        i === listIndex ? list.map((upvote) => !upvote) : list
      )
    );
  };

// Function to add a new upvote to a specific list, maintaining the state of the last item
const addUpvoteToList = (listIndex) => {
    setUpvoteLists((prevLists) =>
      prevLists.map((list, i) => {
        if (i === listIndex) {
          const lastState = list[list.length - 1] || false; // Get the state of the last item or default to false
          return [...list, lastState]; // Add new upvote with the same state as the last item
        }
        return list;
      })
    );
  };

  // Function to add a new list
  const addList = () => {
    setUpvoteLists((prevLists) => [...prevLists, [false]]);
  };

  return (
    <UpvoteContext.Provider
      value={{ upvoteLists, toggleUpvotesInList, addUpvoteToList, addList }}
    >
      {children}
    </UpvoteContext.Provider>
  );
};
