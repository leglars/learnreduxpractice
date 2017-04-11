/**
 * Created by leglars on 2017/4/4.
 */
exports.__esModule = true;

import React from 'react';

import ScrollableImageFrame from './ScrollableImageFrame';
import ContentParagraph from './ContentParagraph';



const ImageWithTextPage = React.createClass({


    render: function () {
        const {page, styleId} = this.props;

        const size = {
            width: "inherit",
            height: 450,
        };

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
                <div className="container">
                    {
                        page.images.length > 1
                        ? (
                            <div>
                                <div className="eight columns">
                                    <div className="imageFrame">
                                        <ScrollableImageFrame images={page.images} size={size}/>
                                    </div>
                                </div>
                                <div className="four columns">
                                    <div className="imageTextSpace">
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
            </div>
        )
    }
});

ImageWithTextPage.propsTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string
};

exports.default = ImageWithTextPage;