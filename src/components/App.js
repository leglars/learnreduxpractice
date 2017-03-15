//import modules
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actionCreator';

//import components
import Main from './Main';

//import src

function mapStateToProps(state) {
    console.log(state);
    return {
        pages: state.pages,
        router: state.router
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
