import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import data from './data';


const reducers = combineReducers({
    data,
    router: routerReducer
});

export default reducers