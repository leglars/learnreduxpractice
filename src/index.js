import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import App from './components/App';


import './statics/styles/skeleton.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>,
  document.getElementById('root')
);
