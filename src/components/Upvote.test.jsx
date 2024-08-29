import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Upvote from './Upvote';

// Mock function to simulate toggle behavior
const mockToggle = jest.fn();

test('it toggles selection state on click', () => {
  // Render the Upvote component with default state (not selected)
  const { getByRole, rerender } = render(
    <Upvote isSelected={false} onToggle={mockToggle} />
  );

  const upvoteButton = getByRole('button');

  fireEvent.click(upvoteButton);

  expect(mockToggle).toHaveBeenCalledTimes(1);

  rerender(<Upvote isSelected={true} onToggle={mockToggle} />);

  // Check if the button has the 'selected' class applied
  expect(upvoteButton).toHaveClass('selected');
});
