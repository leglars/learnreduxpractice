/**
 * Created by leglars on 2017/3/10.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import MdChevronRight from 'react-icons/lib/md/chevron-right';

import '../statics/styles/worksandabout.css';

const AboutMe = React.createClass({
    render: function() {
        return (
            <div className="about">
                <div className="title">
                    About
                </div>
                <p>I am Nicholas Zheng, a UX designer.</p>
                <div className="navToWork">
                    <Link to="/projects">
                        <div className="linkText">Works</div>
                        <div className="bottomChevron clear">
                            <MdChevronRight size={64}/>
                        </div>

                    </Link>
                </div>
            </div>


        )
    }
});

export default AboutMe;