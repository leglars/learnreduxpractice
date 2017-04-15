/**
 * Created by leglars on 2017/4/4.
 */
exports.__esModule = true;

import React from 'react';
import Measure from 'react-measure';

import ScrollableImageFrame from './ScrollableImageFrame';
import ContentParagraph from './ContentParagraph';

const ImageWithTextPage = React.createClass({

    textFrameSize: {
        width: -1,
    },

    setTextWidth: function() {
        let imageFrameWidth;
        if(this.state) {
            imageFrameWidth = this.state.imageFrameDimensions.width;
            const windowWidth = window.innerWidth;
            const textFrameWidth = windowWidth - imageFrameWidth - 64 - 200;
            this.textFrameSize = {width: textFrameWidth};
        }
    },

    render: function () {
        const {page, styleId} = this.props;

        const size = {
            width: "inherit",
            height: 450,
        };

        //initial textFrameWidth
        this.setTextWidth();

        return (
            <div className={styleId}>
                <div className='titleSpace'>
                    <div className='clear'>
                        <div className='titleBackground'>
                            <div className='title'>{page.sectionTitle}</div>
                        </div>

                    </div>
                    <div className='subTitle'>{page.subtitle}</div>
                </div>
                    {
                        page.images.length > 1
                        ? (
                            <div className="imageWithTextPage clear">
                                <div className="inlineColumn">
                                    <Measure
                                        onMeasure={(imageFrameDimensions) =>
                                            this.setState({imageFrameDimensions})
                                        }>
                                        <div className="imageFrame">
                                            <ScrollableImageFrame images={page.images} size={size} styleId={styleId}/>
                                        </div>
                                    </Measure>
                                </div>
                                <div className="inlineColumn">
                                    <div className="textFrame" style={this.textFrameSize}>
                                        <ContentParagraph content={page.content}/>
                                    </div>
                                </div>
                            </div>
                            )
                            : (
                            <div className="row">
                                <div className="four columns relative">
                                    <div className="imageFrame">
                                        <img src={page.images[0].src} alt={page.images[0].alt}/>
                                        <div className="textToBottom">
                                            <ContentParagraph content={page.content}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            )
                    }
                </div>
        )
    }
});

ImageWithTextPage.propsTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string
};

exports.default = ImageWithTextPage;