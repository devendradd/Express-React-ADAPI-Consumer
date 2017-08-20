import React from 'react';
import ReactDOM from 'react-dom';
import {Router,  Route, IndexRoute, browserHistory} from 'react-router'
import Index from './Index';

ReactDOM.render(
  <div>
    <h1> FYR </h1>
    <Index/>
  </div>,
  document.getElementById('root')
);
