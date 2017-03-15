import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers/index';

import projects from '../data/projects';


export const history = createHistory();
const middleware = routerMiddleware(history);

const initalData = {
    data: {
        projects
    }
};


let store = createStore(
    reducers,
    initalData,
    applyMiddleware(middleware)
);

export default store;