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
            <div id="footer" className="wrap">
                <div className="container">
                    <div className="row">
                        <div className="nine columns">
                            <p className="intro">
                                Nicholas Zheng is a UX designer. He likes to explore the potential
                                between people and technologies. He also works as a programmer.
                                Using developing skill to realize idea makes him exciting.
                            </p>
                        </div>
                        <div className="three columns">
                            <div className="social-media">
                                <ul>
                                    <a href="#"><li className="icon"><FaLinkedinSquare size={32} /></li></a>
                                    <a href="#"><li className="icon"><MdEmail size={32} /> </li></a>
                                    <a href="#"><li className="icon"><FaGithub size={32} /></li></a>
                                    <a href="#"><li className="icon"><FaFlickr size={32} /> </li></a>
                                </ul>
                            </div>
                            <div className="copyright">
                                <p>Copy right @ Nicholas Zheng   2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Footer;