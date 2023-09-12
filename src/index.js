import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextData from './context/Context';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextData>
        <App />
      </ContextData>
    </Router>
  </React.StrictMode>
);