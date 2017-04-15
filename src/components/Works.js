/**
 * Created by leglars on 2017/3/11.
 */
import React from 'react';
import {Link} from 'react-router-dom';

import MdChevronLeft from 'react-icons/lib/md/chevron-left';

import '../statics/styles/works.css'


const Works = React.createClass({

    render: function () {
        const {data, minHeight} = this.props;
        const {projects} = data;

        const total = projects.length;
        let half;

        if (total < 9) {
            half = 4
        } else {
            half = total / 2;
        }

        const style = {
            minHeight: minHeight - 32,
        };

        return (
            <div className="works" style={style}>
                <div className="title">
                    WORKS
                </div>
                <div className="projects clear">
                    <div className="labelColumn">
                        <ul>
                            {projects.map((project, index) =>
                                index < half
                                    ? (
                                        <li key={index}>
                                            <Link to={`/projects/${project.projectURL}/page/1`}>
                                                <span className="label">{project.title}</span>
                                            </Link>
                                        </li>
                                    )
                                    : <li key={index} className="disappear">disappear</li>
                            )}
                        </ul>
                    </div>
                    <div className="labelColumn">
                        <ul>
                            {projects.map((project, index) =>
                                index >= half
                                    ? (
                                        <li key={index}>
                                            <Link to={`/projects/${project.projectURL}/page/1`}>
                                                <span className="label">{project.title}</span>
                                            </Link>
                                        </li>
                                    )
                                    : <li key={index} className="disappear">disappear</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="navToAbout">
                    <Link to="#">
                        <div className="bottomChevron clear">
                            <MdChevronLeft size={64} />
                        </div>
                        <div className="linkText">About</div>
                    </Link>
                </div>
            </div>
        )
    }
});

export default Works;