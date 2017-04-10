/**
 * Created by leglars on 2017/4/10.
 */
import React from 'react';
import DOMPurify from 'dompurify';

const ContentParagraph = React.createClass({
    render: function () {
        const { content } = this.props;
        return (
            <div className="content">
                {
                    content.map((block, index) => (
                        <div key={index} className="paragraph"
                             dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block)}}></div>
                    ))
                }
            </div>
        )
    }
});

ContentParagraph.propsTypes = {
    content: React.PropTypes.arrayOf(
        React.PropTypes.string
    )
};

export default ContentParagraph;