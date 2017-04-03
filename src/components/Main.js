/**
 * Created by leglars on 2017/3/10.
 */
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


import Index from './Index';
import ProjectPortfolio from './ProjectPortfolio';
import ImageView from './ImageView';


import logo from '../statics/images/logo@x2';
import '../statics/styles/main.css';
import MdChevronLeft from "react-icons/lib/md/chevron-left";


const Main = React.createClass({

    isLocatedInIndex: function() {
        return (this.props.location.pathname.length > 12)
    },

    render: function() {

        return(

            <div className="wrap">

                {/*ImageView do not use currently*/}

                {/*<Route path="/:class/:projectURL/page/:page/:subtitle/:image"*/}
                       {/*render={() =>*/}
                            {/*<ImageView {...this.props} />*/}
                       {/*} />*/}


                { (this.isLocatedInIndex()) ?
                    <div className="chevronBack">
                        <Link to="/project"><MdChevronLeft size={48} /> </Link>
                    </div>
                    : <div></div> }

                <div className="logo-wrap">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                    </Link>
                </div>

                <Switch>
                    <Route exact path="/" render={() =>
                        <Index {...this.props} />} />
                    <Route exact path="/:class"
                           render={()=>
                            <Index {...this.props}/>
                            }/>
                    <Route
                        Path="/:class/:project?/page/:number?"
                        render={() =>
                            <ProjectPortfolio {...this.props}/>
                        }/>
                </Switch>



            </div>
        )
    }
});

export default Main;