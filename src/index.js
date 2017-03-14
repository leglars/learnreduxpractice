import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';

import './statics/styles/skeleton.css';

ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={App}/>
        </div>
    </Router>
    ), document.getElementById('root')
);
