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
                        <div className="nav">
                            <ul>
                                <NavLink to="/project" activeClassName="active"><li>Projects</li></NavLink>
                                <li></li>
                                <NavLink to="/concept" activeClassName="active"><li>Concepts</li></NavLink>
                            </ul>
                        </div>
                        <Switch>
                            <Route path="/" render={() =>
                                <ProjectsDisplay {...this.props}/>
                            }/>
                            <Route strict path="/project" render={() =>
                                <ProjectsDisplay {...this.props}/>
                            }/>
                            <Route exact path="/concept" component={ConceptsDisplay} />
                        </Switch>

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
});

export default Index;