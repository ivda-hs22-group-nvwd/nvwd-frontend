import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import Questionary from './Questionary';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Questionary/>
  </React.StrictMode>
);
