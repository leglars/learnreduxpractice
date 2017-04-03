/**
 * Created by leglars on 2017/4/3.
 */
exports.__esModule = true;

import React from 'react';
import { Link } from 'react-router-dom';

import MdChevronLeft from 'react-icons/lib/md/chevron-left';
import MdChevronRight from 'react-icons/lib/md/chevron-right';

const FlipButtons = React.createClass({
    render: function() {
        const { previous, next, content, isPrevious, isNext, currentPage} = this.props;

        return(
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
        )
    }
});

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

FlipButtons.propTypes = {
    previous: React.PropTypes.string,
    next: React.PropTypes.string,
    content: React.PropTypes.array,
    isPrevious: React.PropTypes.bool,
    isNext: React.PropTypes.bool,
    currentPage: React.PropTypes.number,
};

exports.default = FlipButtons;