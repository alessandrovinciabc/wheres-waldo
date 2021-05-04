import Home from '../../Pages/Home.js';

import '@testing-library/jest-dom';

import { render, fireEvent } from '@testing-library/react';

test('clicking on the image makes a tag box show up', () => {
  const { getByTestId, queryByTestId } = render(<Home />);
  const imageObject = getByTestId('gameImage');

  expect(queryByTestId('targetBox')).toBeNull();

  fireEvent.click(imageObject);

  expect(getByTestId('targetBox')).toBeDefined();
});
