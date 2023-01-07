import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Home from './Home';
import reducer from '../../reducer';

const store = configureStore({ reducer });

describe('Home Component', () => {
  it('should render Home', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(screen.getByTestId('home-component')).toBeInTheDocument();
  });
});
