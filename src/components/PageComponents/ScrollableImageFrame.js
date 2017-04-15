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
        const { images, size, styleId } = this.props;

        const newSize = {
            width: 800,
            height: size.height - 46
        };

        return (
                <div className="scrollableImageFrame">
                    {
                        styleId === "wdc"
                            ? (
                                <div>
                                    <img src="https://c1.staticflickr.com/3/2883/33208287434_6e5ee935f4_c.jpg"
                                         alt="Browser Frame"
                                         style={{
                                             width: 800,
                                             height: 46,
                                         }}/>
                                    <SwitchableImageFrame images={images} {...newSize}/>
                                </div>
                            )
                            : <SwitchableImageFrame images={images} {...size}/>
                    }
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