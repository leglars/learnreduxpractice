import React from 'react';
import ReactDOM from 'react-dom';
// import { ConnectedRouter, push } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import App from './components/App';
import store, { history } from './redux/store';

import './statics/styles/skeleton.css';

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={App}/>
            </div>
        </ConnectedRouter>
    </Provider>
    ), document.getElementById('root')
);
