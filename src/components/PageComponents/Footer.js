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
            <div className="pFooter" >
                <div className="social-media">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/nicholaszheng/" target="_blank"><FaLinkedinSquare size={24} /></a></li>
                        <li><a href="mailto:leglars@gmail.com" target="_blank"><MdEmail size={24} /></a></li>
                        <li><a href="https://github.com/leglars" target="_blank"><FaGithub size={24} /></a></li>
                        <li><a href="https://www.flickr.com/photos/leglars/" target="_blank"><FaFlickr size={24} /></a></li>
                    </ul>
                </div>
                <div className="copyright">Copyright @ 2017 - Nicholas Zheng</div>
            </div>
        )},
});

exports.default = Footer;