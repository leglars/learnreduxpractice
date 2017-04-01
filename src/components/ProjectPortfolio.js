/**
 * Created by leglars on 2017/3/15.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithub from 'react-icons/lib/fa/github';
import MdEmail from 'react-icons/lib/md/email';
import FaFlickr from 'react-icons/lib/fa/flickr';

import MdChevronLeft from 'react-icons/lib/md/chevron-left';
import MdChevronRight from 'react-icons/lib/md/chevron-right';




import '../statics/styles/projectportfolio.css';
import '../statics/styles/page.css';


const ProjectPortfolio = React.createClass({

    isNextPage: function(currentPage, totalPages) {
        return (currentPage < totalPages)
    },
    isPreviousPage: function(currentPage) {
        return (currentPage > 1)
    },

    updateDimensions: function() {
        const height = window.innerHeight - (81 + 64 + 36 + 44 + 36 + 24);
        this.setState({height: height});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
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

        const style = {
            minHeight: this.state.height,
        };



        return (
            <div>
            <div id="portfolio">

                <div id="pageCounter">
                    <PageCounter currentPage={currentPage} totalPages={totalPages} />
                </div>

                <div id="portfolioContainer">

                    <DemoPage style={style} content={page.content}/>


                    <PageButton previous={previousPagePath}
                                next={nextPagePath}
                                content={content}
                                isPrevious={isPrevious}
                                isNext={isNext}
                                currentPage={currentPage}/>
                </div>

            </div>
            <Footer />
                </div>
        )
    }
});

const DemoPage = ({style, content}) => (
    <div id="theOnlyEnterPoint" style={style}
         dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}></div>
);

const PageButton = ({ previous, next, content, isPrevious, isNext, currentPage}) => (
    <div className="pageChange clear">
        {
            isPrevious
                ? <Previous path={previous}
                            content={content[currentPage - 2].sectionTitle || null} />
                : <div></div>
        }
        {
            isNext
                ? <Next path={next}
                        content={content[currentPage].sectionTitle || null} />
                : <div></div>
        }
    </div>
);


const PageCounter = ({currentPage, totalPages}) => (
    <div className="pageCounter">
        {currentPage} / {totalPages}
    </div>
);


const Previous = ({ path, content }) => (
    <div className="pageUp">
        <Link to={path}>
            <div className="bottomChevron">
                <MdChevronLeft size={38} />
            </div>
            <div className="linkText">{content}</div>
        </Link>
    </div>
);

const Next = ({ path, content }) => (
    <div className="pageDown">
        <Link to={path} >
            <div className="linkText">{content}</div>
            <div className="bottomChevron">
                <MdChevronRight size={38} />
            </div>
        </Link>
    </div>
);


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