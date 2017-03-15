/**
 * Created by leglars on 2017/3/15.
 */
import { INITIAL_DATA } from '../actionCreator';

function data(state=[], action) {
    switch (action.type) {
        case INITIAL_DATA:
            return [
                ...state,
                {data: action.data}
            ];
        default:
            return state;
    }
}

export default data