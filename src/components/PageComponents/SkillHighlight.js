/**
 * Created by leglars on 2017/5/26.
 */
import React from 'react';

const SkillHighlight = React.createClass({
    render: function(){
        const { keywords } = this.props;
        return(
            <div>
                <ul>
                    <li>Design Skill</li>
                </ul>
                <ul>
                    <li>Dev Skill</li>
                    
                </ul>
            </div>
        )
    }
});

export default SkillHighlight;