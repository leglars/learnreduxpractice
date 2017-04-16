/**
 * Created by leglars on 2017/4/4.
 */
exports.__esModule = true;

import React from 'react';
import Measure from 'react-measure';

import ScrollableImageFrame from './ScrollableImageFrame';
import ContentParagraph from './ContentParagraph';
import Title from './Title';

const ImageWithTextPage = React.createClass({

    textFrameSize: {
        width: -1,
    },

    defaultImageSize: {
        width: 680,
        height: 450
    },

    setElementWidth: function () {
        let imageFrameWidth;
        if (this.state) {
            imageFrameWidth = this.state.imageFrameDimensions.width;
            const viewWidth = this.state.viewDimensions.width;
            const textFrameWidth = viewWidth - imageFrameWidth - 64;
            this.textFrameSize = {width: textFrameWidth - 1};
            if (900 <= viewWidth < 1000) {
                this.defaultImageSize = {
                    width: 550,
                    height: 410
                };
            }
            if (viewWidth < 900) {
                this.defaultImageSize = {
                    width: viewWidth,
                    height: 400
                };
                this.textFrameSize = {
                    width: viewWidth,
                };
            }
            if ( viewWidth >= 1000 ){
                this.defaultImageSize = {
                    width: 680,
                    height: 450
                };
            }
            console.log(viewWidth, textFrameWidth, this.defaultImageSize.width);

        }
    },

    render: function () {
        const {page, styleId} = this.props;

        //initial textFrameWidth
        this.setElementWidth();



        return (
            <Measure onMeasure={(viewDimensions) =>
                this.setState({viewDimensions})
            }>
            <div className={styleId}>
                <Title title={page.sectionTitle}
                       subtitle={page.subtitle}
                />
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
                                            <ScrollableImageFrame images={page.images} size={this.defaultImageSize} styleId={styleId}/>
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
            </Measure>
        )
    }
});

ImageWithTextPage.propsTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string
};

exports.default = ImageWithTextPage;