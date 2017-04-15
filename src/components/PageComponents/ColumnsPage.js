/**
 * Created by leglars on 2017/4/3.
 */
/**
 * Created by leglars on 2017/4/3.
 */
exports.__esModule = true;

import React from 'react';

import ContentParagraph from './ContentParagraph';

const ColumnsPage = React.createClass({
    render: function () {

        const { page, styleId } = this.props;
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
                <div className="row columnsPage">
                    {
                        page.content.length === 4
                            ? page.content.map((block, index) => (
                                <div key={block.key} className="three columns">
                                    <img src={block.image.src} alt={block.image.alt} />
                                    <ContentParagraph content={block.text}/>
                                </div>
                            ))
                            : (<div className="fullpage fourColumnCount column container">
                                        {page.content.map((block, index) => (
                                            <span>
                                                <img src={block.image.src} alt={block.image.alt} />
                                                <ContentParagraph content={block.text}/>
                                                <br />
                                            </span>
                                    ))}
                                </div>)

                    }
                </div>
            </div>
        )
    }
});

ColumnsPage.propsTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string,
};

exports.default = ColumnsPage;