/**
 * Created by leglars on 2017/3/10.
 */
import React from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

import Footer from './Footer';
import ProjectsDisplay from './ProjectsDisplay';
import ConceptsDisplay from './ConceptsDisplay';


import '../statics/styles/index.css';




const Index = React.createClass({

    render: function() {
        return(
            <div>
                <div className="container">
                    <div className="index-wrap">
                        {/*<div className="nav">*/}
                            {/*<ul>*/}
                                {/*<NavLink to="/project" activeClassName="active"><li>Projects</li></NavLink>*/}
                                {/*<li></li>*/}
                                {/*<NavLink to="/concept" activeClassName="active"><li>Concepts</li></NavLink>*/}
                            {/*</ul>*/}
                        {/*</div>*/}

                        <ProjectsDisplay {...this.props}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
});

export default Index;