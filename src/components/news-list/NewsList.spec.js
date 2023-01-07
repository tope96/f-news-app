import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../../reducer';
import NewsList from './NewsList';

const store = configureStore({ reducer });

describe('NewsList Component', () => {
  it('should render NewsList', () => {
    render(
      <Provider store={store}>
        <NewsList />
      </Provider>,
    );

    expect(screen.getByTestId('newsList-component')).toBeInTheDocument();
  });
});
