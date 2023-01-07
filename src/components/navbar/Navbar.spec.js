import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Navbar from './Navbar';
import reducer from '../../reducer';

const store = configureStore({ reducer });

describe('Navbar Component', () => {
  it('should render Navbar', () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
