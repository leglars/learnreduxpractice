/**
 * Created by leglars on 2017/3/10.
 */
import React from 'react';
import { Link, Route } from 'react-router-dom';


import Index from './Index';
import Footer from './Footer';


import logo from '../statics/images/logo@x2';
import '../statics/styles/main.css';


const Main = React.createClass({
    render: function() {
        return(
            <div className="wrap">
                <div className="logo-wrap">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                </div>
                {/*this is the clone element which can be change base on content*/}
                <Index/>

                <Route strict path="/" component={Footer} />
            </div>
        )
    }
});

export default Main;