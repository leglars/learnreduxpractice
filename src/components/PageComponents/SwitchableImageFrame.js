/**
 * Created by leglars on 2017/4/4.
 */
import React from 'react';
import Slider from './react-slick';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import left from '../../statics/images/left.png';
import right from '../../statics/images/right.png'


const SwitchableImageFrame = React.createClass({
    render: function () {
        const { images, width, height } = this.props;

        const frameSize = {
            width: width,
            height: height,
        };



        const settings = this.props.settings || {
                dots: true,
                speed: 500,
                slidesToScroll: 1,
                slidesToShow: 1,
                nextArrow: <img src={right} alt="next"/>,
                prevArrow: <img src={left} alt="prev"/>
        };

        return (
            <div style={frameSize}>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.src}
                                 alt={image.alt}
                                 />
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
});

SwitchableImageFrame.propTypes = {
    settings: React.PropTypes.object,
    images: React.PropTypes.arrayOf(
        React.PropTypes.object
    ),
    width: React.PropTypes.number,
    height: React.PropTypes.number
};

export default SwitchableImageFrame;