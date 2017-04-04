/**
 * Created by leglars on 2017/4/4.
 */
exports.__esModule = true;

import React from 'react';

import SwitchableImageFrame from './SwitchableImageFrame';



const ImageWithTextPage = React.createClass({
    render: function () {
        const images = [
            {
                src: 'https://c1.staticflickr.com/3/2925/33712728246_9f5e46bddd_b.jpg',
                alt: 'we',
            },
            {
                src: 'https://github.com/leglars/portfolio/blob/master/react-slick/statics/images/we/whisper_effect_title_hero_2.jpg?raw=true',
                alt: 'we exhibition',
            },
            {
                src: 'https://github.com/leglars/portfolio/blob/master/react-slick/statics/images/we/whisper_effect_inspire_everydaywhisper.jpg?raw=true',
                alt: "Everyday Whisper"
            },
            {
                src: 'https://github.com/leglars/portfolio/blob/master/react-slick/statics/images/we/whisper_effect_inspire_listentree.jpg?raw=true',
                alt: "Listen Tree"
            },
            {
                src: 'https://github.com/leglars/portfolio/blob/master/react-slick/statics/images/we/whisper_effect_inspire_tellYouSecretToaTreeHole.jpg?raw=true',
                alt: "Tell your secret to a tree hole"
            }
        ];

        const size = {
            width: 600,
            height: 400,
        };

        return (
            <div className="imageFrame">
                <SwitchableImageFrame images={images} {...size}/>
            </div>

        )
    }
});

ImageWithTextPage.propTypes = {
    page: React.PropTypes.object,
    styleId: React.PropTypes.string
};

exports.default = ImageWithTextPage;