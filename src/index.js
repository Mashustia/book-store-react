import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import booksList from "./books";
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App books={booksList} />
  </BrowserRouter>,
  document.getElementById('root')
);
