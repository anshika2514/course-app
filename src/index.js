// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';   // Import Provider
import store from './redux/store';        // Import store
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  {/* Wrap App with Provider */}
    <App />
  </Provider>
);

reportWebVitals();
