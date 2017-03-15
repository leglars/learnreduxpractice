/**
 * Created by leglars on 2017/3/16.
 */
import React from 'react';

const PageCounter = React.createClass({
    render: function () {

        return (
            <div>
                {this.props.currentPage} / {this.props.totalPages}
            </div>
        )
    }
});

export default PageCounter;