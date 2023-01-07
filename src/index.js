import React from 'react';
import { createRoot } from 'react-dom/client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './reducer';

import Home from './components/home/Home';
import GlobalStyle from './global-style';

const store = configureStore({ reducer });

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Home />
  </Provider>,
);
