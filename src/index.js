import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import './custom.scss';

/* The following line can be included in your src/index.js or App.js file */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);