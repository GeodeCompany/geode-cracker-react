import React, { Fragment } from 'react';
import "./MascotFullscreenCard.scss"


class MascotFullscreenCard extends React.Component{
    state = {
        text: "Goed gedaan! We gaan de geode nu kraken",
        left_button_text: "Gevoel",
        right_button_text: "Zicht",
        mascot_base_image_path: "/img/mascot_base.png"
    }

    render(){
      if(this.props.type == "next"){
        this.state.button = 
        <button class="mascot__dialogue__button--next button"> {'>'} </button>
        ;
      };
      if(this.props.type == "choice"){
        this.state.button = 
        <Fragment>
          <button class="mascot__dialogue__button--choice mascot__dialogue__button--choice--left button"> {this.state.left_button_text} </button>
          <button class="mascot__dialogue__button--choice mascot__dialogue__button--choice--right button"> {this.state.right_button_text} </button>
        </Fragment>
        ;
      };
        return(
          <section class="mascot">
            <figure class="mascot__figure">
              <img class="mascot__figure__image" src={this.state.mascot_base_image_path} alt="A picture of the mascot" />
            </figure>

            <section class="mascot__dialogue">
              <section class="mascot__dialogue__arrowContainer">
                <div class="mascot__dialogue__arrowContainer__arrow--up"></div>
              </section>

              <p class={"mascot__dialogue__text mascot__dialogue__text--" + this.props.type} >{this.state.text}</p>
              {this.state.button}
            </section>
          </section>
        )
    }
}

export default MascotFullscreenCard;
