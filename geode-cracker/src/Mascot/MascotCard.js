import React, { Fragment } from 'react';
import "./MascotCard.scss"


class MascotCard extends React.Component{
    state = {
        text: "Goed gedaan! We gaan de geode nu kraken",
        left_button_text: "Gevoel",
        right_button_text: "Zicht",
        mascot_base_image_path: "/img/mascot_base.png"
    }

    render(){
      if(this.props.mascot_type == "next"){
        this.state.button =
        <button class="mascot__dialogue__button--next button" onClick={() => this.props.changeContent(this.props.mascot_next_content)}> {'>'} </button>
        ;
      };
      if(this.props.mascot_type == "choice"){
        this.state.button =
        <Fragment>
          <button class="mascot__dialogue__button--choice mascot__dialogue__button--choice--left button" onClick={() => this.props.changeContent(this.props.mascot_choice_left_content)}> {this.props.mascot_choice_left_text} </button>
          <button class="mascot__dialogue__button--choice mascot__dialogue__button--choice--right button" onClick={() => this.props.changeContent(this.props.mascot_choice_right_content)}> {this.props.mascot_choice_right_text} </button>
        </Fragment>
        ;
      };
      return(
        <section class="mascot">
          <figure class="mascot__figure">
            <img class="mascot__figure__image" src={this.state.mascot_base_image_path} alt="A picture of the mascot" />
          </figure>

          <section class="mascot__dialogue">
            <div class="mascot__dialogue__arrow--up"></div>
            <p class={"mascot__dialogue__text mascot__dialogue__text--" + this.props.mascot_type} >{this.props.mascot_text}</p>
            {this.state.button}
          </section>
        </section>
      )
    }
}

export default MascotCard;
