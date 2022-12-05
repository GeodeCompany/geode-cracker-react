import React from 'react';
import './MascotHelp.css';

class MascotHelp extends React.Component{

    state = {
        mascot_inactive_image_path: "/img/mascot_inactive.png",
        mascot_active_image_path: "/img/mascot_active.png",
        text: "Wipe the geode clean with the cloth"
    }

    render(){
        return(
        <article class="help">        
            <figure class="help__figure">
                <img class="help__figure__image" src={this.state.mascot_inactive_image_path}></img>
            </figure>
            <section class="help__dialogue">
                <p class="help__dialogue__text">{this.state.text}</p>
                <div class="help__dialogue__arrow"></div>
            </section>
        </article>
        )
    }
}

export default MascotHelp;
