/**
 * Created by leglars on 2017/3/10.
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './Footer';
import Works from './Works';
import AboutMe from './AboutMe';


import '../statics/styles/index.css';




const Index = React.createClass({

    updateDimensions: function() {
        const width = window.innerWidth;
        let height = 0;

        // TODO: 900 is a temp number, it should connect with media query
        if (width > 900) {
            height = window.innerHeight - (81 + 110);
            this.setState({height: height});
        }
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    },

    render: function() {
        let style;
        if(this.state.height) {
            style = {
                minHeight: this.state.height,
            }
        }


        return(
            <div>
                <div className="container">
                    <div className="wrap" style={style}>
                        {/*TODO: add filter*/}
                        {/*<div className="nav">*/}
                            {/*<ul>*/}
                                {/*<NavLink to="/project" activeClassName="active"><li>Projects</li></NavLink>*/}
                                {/*<li></li>*/}
                                {/*<NavLink to="/concept" activeClassName="active"><li>Concepts</li></NavLink>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                        <Switch>
                            <Route exact path="/" render={()=>
                                <AboutMe {...this.props}/>}
                            />
                            <Route path="/projects" render={() =>
                                <Works minHeight={this.state.height}
                                       {...this.props}/>}
                            />
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
});
export default Index;