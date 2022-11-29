import React from 'react';
import './Banner.css';

import BannerImg from "./Images/BannerBottom.png";

class BannerBottom extends React.Component{
    render(){
        return(
          <section class="banner banner--bottom">
            <figure class="banner__figure">
              <img  class="banner__figure__image" src={BannerImg} alt="Rocky banner on the bottom of the page" />
            </figure>
          </section>
        )
    }
}

export default BannerBottom;
