/**
 * Created by leglars on 2017/4/16.
 */
import React from 'react';

const Title =  React.createClass({
    render: function () {
        const { title, subtitle } = this.props;

        return(
            <div className='sectionTitle'>
                <div className='clear'>
                    <div className='titleBackground'>
                        <div className='title'>{title}</div>
                    </div>
                </div>
                <div className='subTitle'>{subtitle}</div>
            </div>
        )
    }
});

Title.propsTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
};

export default Title;