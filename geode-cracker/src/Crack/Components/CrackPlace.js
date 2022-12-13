import React from 'react';
import './CrackPlace.scss';

class CrackPlace extends React.Component{
    state = {
        crack_place_image_path: "/img/crack_place.png"
    };

    render(){
        return(
            <section class="crackPlace">
                <figure class="crackPlace__figure">
                <button class="crackPlace__figure__button button--triggerbox" onClick={() => this.props.changeContent("crack_lever")}>LEVER</button>
                    <img class="crackPlace__figure__image" src={this.state.crack_place_image_path}></img>
                </figure>
            </section>
        )
    }
}

export default CrackPlace;