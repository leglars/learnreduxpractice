/**
 * Created by leglars on 2017/4/3.
 */
exports.__esModule = true;

import React from 'react';

const PageCounter = React.createClass({

    render: function () {
        const {currentPage, totalPages} = this.props;
        return <div className="pageCounter"> {currentPage} / {totalPages} </div>
    },
});

PageCounter.propsTypes = {
    currentPage: React.PropTypes.number,
    totalPages: React.PropTypes.number
};

exports.default = PageCounter;