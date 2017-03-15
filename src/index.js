import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux';
import { Route } from 'react-router';


import App from './components/App';
import store, { history } from './redux/store';

console.log(store.getState());

import './statics/styles/skeleton.css';

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />

        </ConnectedRouter>
    </Provider>
    ), document.getElementById('root')
);
