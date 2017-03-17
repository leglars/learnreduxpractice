/**
 * Created by leglars on 2017/3/18.
 */

import React from 'react';

import '../statics/styles/imageview.css';
import transducer from '../statics/images/transducer.jpg';

const ImageView = React.createClass({

    getMargin: function () {
        const img = new Image();
        img.src = transducer;
        img.onload = function() {
            const width = this.width;
            const height = this.height;
            const margin = - width * 560 / height / 2;
            const rwidth = margin * 2 * (-1) + 72;
            window.document.getElementById("image-frame-wrap").style.marginRight = String(margin) + "px";
            window.document.getElementById("image-frame-wrap").style.width = String(rwidth) + "px";
        };
    },


    render: function () {
        this.getMargin();

        return (
            <div id="image-view">
                <div id="image-frame-wrap">
                    <img src={transducer} alt="hahahaha" />
                    <div className="captain"> adfadfadfadfadfadfadfadfaasfda asdfadfa asdfadfadfadfa asdfafdafaaaaaaaaaaaaaasd adfadfadfa  yyyyyyyyyyyyyyy </div>
                </div>

                <div id="image-view-mask"></div>
            </div>
        )
    }
});

export default ImageView;