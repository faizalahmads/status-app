import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './states';

import './assets/style.css';
import LoadingBar from 'react-redux-loading-bar';

const root = createRoot(document.getElementById('root'));

// TODO: wrap App with store provider
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <LoadingBar />
        <App />
      </StrictMode>
    </BrowserRouter>,
  </Provider>
);
