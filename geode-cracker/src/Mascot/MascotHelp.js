import React from 'react';
import './MascotHelp.scss';

class MascotHelp extends React.Component{

    state = {
      mascot_active: false,

      mascot_inactive_image_path: "/img/mascot_inactive.png",
      mascot_active_image_path: "/img/mascot_active.png",
    }

    toggleContent(){
      if(this.state.mascot_active == false){
        this.changeVisibility("visible");
        this.changeImage(this.state.mascot_active_image_path);
        this.state.mascot_active = true;
      } else {
        this.changeVisibility("hidden");
        this.changeImage(this.state.mascot_inactive_image_path);
        this.state.mascot_active = false;
      }
    }

    changeVisibility(state){
      document.getElementById("help_text").style.visibility = state
    }

    changeImage(img){
      document.getElementById("mascot_img").src = img
    }

    render(){
        return(
        <article class="help">
            <figure class="help__figure" onClick={() => this.toggleContent()}>
                <img class="help__figure__image" id="mascot_img" src={this.state.mascot_inactive_image_path}></img>
            </figure>
            <section class="help__dialogue" id="help_text">
                <div class="help__dialogue__arrow"></div>
                <p class="help__dialogue__text">{this.props.mascot_text}</p>
            </section>
        </article>
        )
    }
}

export default MascotHelp;
