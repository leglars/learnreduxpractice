/**
 * Created by leglars on 2017/3/15.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import MdEmail from 'react-icons/lib/md/email';
import FaFlickr from 'react-icons/lib/fa/flickr';

import PageCounter from './PageCounter';

import '../statics/styles/projectportfolio.css';

const ProjectPortfolio = React.createClass({

    isNextPage: function(currentPage, totalPages) {
        return (currentPage < totalPages)
    },
    isPreviousPage: function(currentPage) {
        return (currentPage > 1)
    },


    render: function () {

        const path = this.props.location.pathname.split('/');
        const catagory = path[1];
        const projectURL= path[2];
        const currentPage = Number(path[path.length - 1]);

        //page content
        const index = this.props.data[catagory].findIndex(
            (project) => project.projectURL === projectURL
        );
        const content = this.props.data[catagory][index].sections;
        const page = content[currentPage - 1];

        // page counter
        const totalPages = content.length;
        const nextPage = currentPage + 1;
        const previousPage = currentPage - 1;

        // page pointer
        const pagePath = path.slice(0, path.length - 1).join('/') + '/';
        const nextPagePath = pagePath + String(nextPage);
        const previousPagePath = pagePath + String(previousPage);
        const isNext = this.isNextPage(currentPage, totalPages);
        const isPrevious = this.isPreviousPage(currentPage);

        return (
            <div>
                <div>
                    <p>{page.sectionTitle}</p>
                    <p>{page.subTitle}</p>
                    <p>{page.content}</p>
                    <PageCounter currentPage={currentPage} totalPages={totalPages} />
                    <div>
                        {
                            isPrevious
                                ? <Link to={previousPagePath}>{content[currentPage - 2].sectionTitle || null}</Link>
                                : <div></div>
                        }
                        {
                            isNext
                                ? <Link to={nextPagePath}>{content[currentPage].sectionTitle || null}</Link>
                                : <div></div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
});


const Footer = React.createClass({
    render: function () {

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
        )}
});



export default ProjectPortfolio;