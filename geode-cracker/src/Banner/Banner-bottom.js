import React from 'react';
import './Banner.css';

import BannerImg from "./Images/BannerBottom.png";

class BannerBottom extends React.Component{
    render(){
        return(
            <img src={BannerImg} alt="Rocky banner on the bottom of the page" class="bannerBottomImage" />
        )
    }
}

export default BannerBottom;
