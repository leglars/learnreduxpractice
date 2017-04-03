/**
 * Created by leglars on 2017/4/3.
 */
/**
 * Created by leglars on 2017/4/3.
 */
exports.__esModule = true;

import React from 'react';
import DOMPurify from 'dompurify';

const FourColumnsPage = React.createClass({
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
                <div className="row">
                    {
                        page.content.map((block, index) => (
                            <div key={block.key} className="three columns">
                                <img src={block.image.src} alt={block.image.alt} />
                                <div className="content"
                                     dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block.text)}}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
});

FourColumnsPage.protoTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string,
};

exports.default = FourColumnsPage;