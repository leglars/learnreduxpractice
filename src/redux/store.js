/**
 * Created by leglars on 2017/3/15.
 */
import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';

import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducer from './reducers/index';

import projects from '../data/projects';


const defaultState = {
    projects
};

export const history = createHashHistory();
// const middleware = routerMiddleware(history);


const store = createStore(
        connectRouter(history)(reducer),
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );


export default store;