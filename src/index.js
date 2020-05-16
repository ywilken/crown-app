import React from 'react';
import ReactDOM from 'react-dom';
// ReactRouter: We have to import BrowserRouter (which is a component that we wrap around our app)
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

