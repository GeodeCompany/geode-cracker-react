import React from 'react';
import './Banner.scss';

class BannerBottom extends React.Component{

  state = {
    banner_bottom_image_path: "/img/banner_bottom.png"
  }

  render(){
      return(
        <section class="banner banner--bottom">
          <figure class="banner__figure">
            <img class="banner__figure__image" src={this.state.banner_bottom_image_path} alt="Rocky banner on the bottom of the page" />
          </figure>
        </section>
      )
  }
}

export default BannerBottom;
