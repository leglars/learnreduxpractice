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
        const { page, styleId } = this.props

        const size = {
            width: 800,
            height: 600,
        };

        return (
            <div className={styleId}>
                <div className="scrollableImageFrame">
                    <SwitchableImageFrame images={page.images} {...size}/>
                </div>
            </div>

        )
    }
});

ScrollableImagePage.propsTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string
};

exports.default = ScrollableImagePage;