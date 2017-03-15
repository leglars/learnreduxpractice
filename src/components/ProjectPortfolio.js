/**
 * Created by leglars on 2017/3/15.
 */
import React from 'react';
import { Link } from 'react-router-dom';

import PageCounter from './PageCounter';

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

        const index = this.props.data[catagory].findIndex(
            (project) => project.projectURL === projectURL
        );
        const content = this.props.data[catagory][index].sections;

        const page = content[currentPage - 1];
        const totalPages = content.length;
        const nextPage = currentPage + 1;
        const previousPage = currentPage - 1;

        const pagePath = path.slice(0, path.length - 1).join('/') + '/';
        const nextPagePath = pagePath + String(nextPage);
        const previousPagePath = pagePath + String(previousPage);
        const isNext = this.isNextPage(currentPage, totalPages);
        const isPrevious = this.isPreviousPage(currentPage);

        return (
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
        )
    }
});

export default ProjectPortfolio;