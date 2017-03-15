/**
 * Created by leglars on 2017/3/15.
 */
import { combineReducers } from 'redux';
// import { routerReducer} from 'react-router-redux';

import pages from './pages';

const reducer = combineReducers({
    pages,
    // routing: routerReducer
});

export default reducer;