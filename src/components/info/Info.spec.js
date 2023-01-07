import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Info from './Info';

const testText = 'Test info';

describe('Info Component', () => {
  it('should render Info', () => {
    render(
      <Info>{testText}</Info>,
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
