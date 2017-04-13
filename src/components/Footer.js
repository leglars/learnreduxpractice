/**
 * Created by leglars on 2017/3/10.
 */
import React from 'react';

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import MdEmail from 'react-icons/lib/md/email';
import FaFlickr from 'react-icons/lib/fa/flickr';


import '../statics/styles/footer.css';

const Footer = React.createClass({
    render: function () {
        return (
            <div className="footer">
                <div className="container">
                    <div className="left">
                        <div className="brand">
                            <div className="name">Nicholas Zheng</div>
                            <div className="position">UX Designer | Front-End Developer</div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="social-media">
                            <ul>
                                <li className="icon"><a href="#"><FaLinkedinSquare size={32}/></a></li>
                                <li className="icon"><a href="#"><MdEmail size={32}/></a></li>
                                <li className="icon"><a href="#"><FaGithub size={32}/></a></li>
                                <li className="icon"><a href="#"><FaFlickr size={32}/></a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            Copy right @ Nicholas Zheng 2017
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});

export default Footer;