/**
 * Created by leglars on 2017/4/3.
 */
exports.__esModule = true;

import React from 'react';
import DOMPurify from 'dompurify';

const TitlePage = React.createClass({
    render: function () {

        const { page, styleId } = this.props;
        return (
            <div className={styleId}>
                <div className='titleHero'>
                    {page.heroImages.map((image, index) => (
                        <div key={image.key} className='hero'>
                            <img
                                src={image.src}
                                alt={image.alt} />
                        </div>
                    ))}
                </div>
                <div className='whiteFrame clear'>
                    <div className='titleBackground'>
                        <div className='title'>{page.title}</div>
                    </div>
                    <div className='subTitle'>{page.subtitle}</div>
                </div>
                <div className='content'>
                    <div className='halfPage columnRight two column container'>
                        {page.content.map((block, index) => (
                            <div key={index} className="paragraph"
                                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block)}}></div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
});

TitlePage.propsTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string,
};

exports.default = TitlePage;