import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithContext from './contexts/AppWithContext';

ReactDOM.render(
  <React.StrictMode>
    <AppWithContext />
  </React.StrictMode>,
  document.getElementById('root')
);
