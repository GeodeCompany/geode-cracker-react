import React from 'react';
import './MascotHelp.css';

class MascotHelp extends React.Component{

    state = {
        mascot_inactive_image_path: "/img/mascot_inactive.png",
        mascot_active_image_path: "/img/mascot_active.png",
        mascot_text: "wipe the geode clean with the cloth"
    }

    render(){
        return(
        <article class="help">        
            <figure class="help__figure">
                <img class="help__figure__image" src={this.state.mascot_inactive_image_path}></img>
            </figure>
            <section class="help__container">
                <p class="help__container__text">{this.state.mascot_text}</p>
                <div class="help__container__arrow"></div>
            </section>
        </article>
        )
    }
}

export default MascotHelp;
