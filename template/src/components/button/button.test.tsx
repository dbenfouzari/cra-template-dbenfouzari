import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './button';

describe('Components/button', function() {
  it('should correctly render', () => {
    const { getByText } = render(
      <div>
        <Button>Click here</Button>
      </div>,
    );

    expect(getByText(/click here/i)).toBeInTheDocument();
    fireEvent.click(getByText(/click here/i)); // have to do this to get 100% coverage
  });

  it('should correctly handle click', () => {
    const buttonCallback = jest.fn();

    const { getByText } = render(
      <div>
        <Button onClick={buttonCallback}>Click here</Button>
      </div>,
    );

    fireEvent.click(getByText(/click here/i));
    expect(buttonCallback).toHaveBeenCalled();
  });
});
