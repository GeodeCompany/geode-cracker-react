import React from 'react';
import './Banner.css';

import BannerImg from "./Images/BannerTop.png";


class BannerTop extends React.Component{
    render(){
        return(
            <img src={BannerImg} alt="Rocky banner on the top of the page" class="bannerTopImage"/>
        )
    }
}

export default BannerTop;
