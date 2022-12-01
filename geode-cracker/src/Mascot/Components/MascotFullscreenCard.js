import React from 'react';
import "./MascotFullscreenCard.css"


class MascotFullscreenCard extends React.Component{
    state = {
        text: "Goed gedaan! We gaan de geode nu kraken",
        left_button_text: "Gevoel",
        right_button_text: "Zicht",
        mascot_base_image_path: "/img/mascot_base.png"
    }

    render(){
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
              <button class={"mascot__dialogue__button--next button mascot__dialogue__next--" + this.props.type}> {'>'} </button>
              <button class={"mascot__dialogue__button__choice button  mascot__dialogue__button__choice--left mascot__dialogue__choice--" + this.props.type}> {this.state.left_button_text} </button>
              <button class={"mascot__dialogue__button__choice button  mascot__dialogue__button__choice--right mascot__dialogue__choice--" + this.props.type}> {this.state.right_button_text} </button>
            </section>
          </section>
        )
    }
}

export default MascotFullscreenCard;
