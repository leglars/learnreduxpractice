/**
 * Created by leglars on 2017/4/3.
 */
exports.__esModule = true;

import React from 'react';

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import MdEmail from 'react-icons/lib/md/email';
import FaFlickr from 'react-icons/lib/fa/flickr';

const Footer = React.createClass({

    render: function() {
        return (
            <div id="pfooter" >
                <div className="social-media">
                    <ul>
                        <a href="#"><li><FaLinkedinSquare size={20} /></li></a>
                        <a href="#"><li><MdEmail size={20} /> </li></a>
                        <a href="#"><li><FaGithub size={20} /> </li></a>
                        <a href="#"><li><FaFlickr size={20} /> </li></a>
                    </ul>
                </div>
                <div className="copyright">Copyright @ 2017 - Nicholas Zheng</div>
            </div>
        )},
});

exports.default = Footer;