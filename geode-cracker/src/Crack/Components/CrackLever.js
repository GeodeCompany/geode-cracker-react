import React from 'react';
import './CrackLever.scss';

class CrackLever extends React.Component{
    state = {
        crack_action: "placeholder",
        crack_lever_up_image_path: "/img/crack_lever_up.png",
        crack_lever_down_image_path: "/img/crack_lever_down.png",
        crack_lever_state: "up"
    };

    changeLeverState(state){
        this.setState({crack_lever_state: state});
    }

    render(){
        return(
            <section class="crackLever">
            <figure class="crackLever__figure">
                {(this.state.crack_lever_state === "up") && <button class="crackLever__figure__button--up button--triggerbox" onClick={() => this.changeLeverState("down")}>LEVER</button>}
                {(this.state.crack_lever_state === "up") && <img class="crackLever__figure__image" src={this.state.crack_lever_up_image_path}></img>}
                {(this.state.crack_lever_state === "down") && <button class="crackLever__figure__button--down button--triggerbox" onClick={() => this.props.changeContent("crack_finish")}>LEVER</button>}
                {(this.state.crack_lever_state === "down") && <img class="crackLever__figure__image" src={this.state.crack_lever_down_image_path}></img>}
            </figure>
        </section>
        )
    }
}

export default CrackLever;