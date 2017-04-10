/**
 * Created by leglars on 2017/3/15.
 */
import React from 'react';
import DOMPurify from 'dompurify';

import { Footer, FlipButtons, PageCounter,
         TitlePage, ColumnsPage, ImageWithTextPage, ScrollableImagePage } from './PageComponents';

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
        let height = window.innerHeight - (81 + 64 + 36 + 44 + 36 + 24);
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

        const { data, location } = this.props;

        const path = location.pathname.split('/');
        const catagory = path[1];
        const projectURL= path[2];
        const currentPage = Number(path[path.length - 1]);

        //page content
        const index = data[catagory].findIndex(
            (project) => project.projectURL === projectURL
        );
        const content = data[catagory][index].sections;  // content = sections
        const page = content[currentPage - 1];           // page = each of sections
        const styleId = data[catagory][index].styleId;

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
                        <div className="theEnterPoint" style={style}>
                            {
                                page.is.titlePage
                                    ? <TitlePage page={page} styleId={styleId} />
                                    : page.is.columns
                                        ? <ColumnsPage page={page} styleId={styleId}/>

                                        : page.is.imageWithText
                                            ? <ImageWithTextPage page={page} styleId={styleId}/>
                                            : page.is.scrollableImagePage
                                                ? <ScrollableImagePage page={page} styleId={styleId} />
                                                : <DemoPage content={page.content}/>
                            }

                        </div>

                        <FlipButtons previous={previousPagePath}
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
    <div id="theOnlyEnterPoint"
         dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}></div>
);


export default ProjectPortfolio;