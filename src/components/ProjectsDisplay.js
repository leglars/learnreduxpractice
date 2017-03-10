/**
 * Created by leglars on 2017/3/11.
 */
import React from 'react';

import '../statics/styles/projectsdisplay.css'

import placeholder from '../statics/images/placeholder.jpg'

const ProjectsDisplay = React.createClass({
    render: function () {
        return (
            <div className="projectsdisplay-wrap">
                <img src={placeholder} alt=""/>
                <img src={placeholder} alt=""/>
                <img src={placeholder} alt=""/>
                <img src={placeholder} alt=""/>
                <img src={placeholder} alt=""/>
            </div>
        )
    }
});

export default ProjectsDisplay;