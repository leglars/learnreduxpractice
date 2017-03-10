/**
 * Created by leglars on 2017/3/10.
 */
import React from 'react';

import ProjectsDisplay from './ProjectsDisplay'

import '../statics/styles/index.css';

const Index = React.createClass({
    render: function() {
        return(
            <div className="container">
                <div className="index-wrap">
                    <div className="nav">
                        <ul>
                            <a href="#" className="active"><li>Projects</li></a>
                            <li></li>
                            <a href="#"><li>Concepts</li></a>
                        </ul>
                    </div>
                    <ProjectsDisplay/>
                </div>
            </div>
        )
    }
});

export default Index;