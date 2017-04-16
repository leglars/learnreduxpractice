/**
 * Created by leglars on 2017/4/3.
 */
/**
 * Created by leglars on 2017/4/3.
 */
exports.__esModule = true;

import React from 'react';

import ContentParagraph from './ContentParagraph';
import Title from './Title';

const ColumnsPage = React.createClass({
    render: function () {

        const { page, styleId } = this.props;
        return (
            <div className={styleId}>
                <Title title={page.sectionTitle}
                       subtitle={page.subtitle}
                />
                <div className="row columnsPage">
                    {
                        page.content.length === 4
                            ? page.content.map((block, index) => (
                                <div key={block.key} className="three columns">
                                    {
                                        block.image
                                            ? <img src={block.image.src} alt={block.image.alt} />
                                            : <div></div>
                                    }
                                    <ContentParagraph content={block.text}/>
                                </div>
                            ))
                            : (<div className="fullpage fourColumnCount column container">
                                        {page.content.map((block, index) => (
                                            <div key={index}>
                                                {
                                                    block.image
                                                        ? <img src={block.image.src} alt={block.image.alt} />
                                                        : <div></div>
                                                }
                                                <ContentParagraph content={block.text}/>
                                                <br />
                                            </div>
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