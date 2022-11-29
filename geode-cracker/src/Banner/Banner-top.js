import React from 'react';
import './Banner.css';

import BannerImg from "./Images/BannerTop.png";


class BannerTop extends React.Component{
    render(){
        return(
          <section class="banner banner--top">
            <figure class="banner__figure">
              <img class="banner__figure__image" src={BannerImg} alt="Rocky banner on the top of the page" />
            </figure>
          </section>
        )
    }
}

export default BannerTop;
