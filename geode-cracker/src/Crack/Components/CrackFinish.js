import React from 'react';
import './CrackFinish.scss';


class CrackFinish extends React.Component{
    state = {
        crack_action: "placeholder",
        crack_finish_image_path: "/img/crack_finish.png"
    };

    render(){
        return(
            <section class="crackFinish">
            <figure class="crackFinish__figure">
                <button class="crackFinish__figure__button button--triggerbox" onClick={() => this.props.changeContent(this.props.crack_finish_content)}>LEVER</button>
                <img class="crackFinish__figure__image" src={this.state.crack_finish_image_path}></img>
            </figure>
        </section>
        )
    }
}

export default CrackFinish;