import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/reset.css';
import './styles/style.css';
import App from './App/';

const Application = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
render(<Application />, rootElement);
