/**
 * Created by leglars on 2017/3/11.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import '../statics/styles/projectsdisplay.css'
import placeholder from '../statics/images/placeholder.jpg'



const ProjectsDisplay = React.createClass({



    render: function () {


        return (
            <div className="projectsdisplay-wrap">



                {this.props.data.projects.map((project, index) =>

                    <Link key={index} to={`/projects/${project.projectURL}/page/1`}>
                        <img key={index} src={placeholder} alt={project.title} />
                    </Link>
                )}



            </div>

        )
    }
});

export default ProjectsDisplay;