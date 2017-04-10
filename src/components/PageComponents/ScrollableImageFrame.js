/**
 * Created by leglars on 2017/4/10.
 */
/**
 * Created by leglars on 2017/4/4.
 */
exports.__esModule = true;

import React from 'react';
import SwitchableImageFrame from './SwitchableImageFrame';




const ScrollableImagePage = React.createClass({
    render: function () {
        const { images, size } = this.props;

        return (
                <div className="scrollableImageFrame">
                    <SwitchableImageFrame images={images} {...size}/>
                </div>
        )
    }
});

ScrollableImagePage.propsTypes = {
    images: React.PropTypes.arrayOf(
        React.PropTypes.object
    ),
    size: React.PropTypes.object
};

exports.default = ScrollableImagePage;