import React from 'react';
import './Banner.scss';

class BannerTop extends React.Component{

  state = {
    banner_top_image_path: "/img/banner_top.png"
  }

    render(){
        return(
          <section class="banner banner--top">
            <figure class="banner__figure">
              <img class="banner__figure__image" src={this.state.banner_top_image_path} alt="Rocky banner on the top of the page" />
            </figure>
          </section>
        )
    }
}

export default BannerTop;
