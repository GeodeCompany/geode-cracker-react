import React from 'react';
import './Crack.scss';

import CrackPlace from './Components/CrackPlace';
import CrackLever from './Components/CrackLever';
import CrackFinish from './Components/CrackFinish';

class Crack extends React.Component{
    state = {
        crack_action_text: "Plaats de Geode",
        crack_place_state: true,
        crack_lever_state: false,
        crack_finish_state: false
    };

    changeContent(name){
        this.resetContent();
        switch (name) {
            case "crack_place":
                this.changeActionText("Plaats de Geode");
                this.setState({crack_place_state: true});
                break;
            case "crack_lever":
                this.changeActionText("Kraak de Geode");
                this.setState({crack_lever_state: true});
                break;
            case "crack_finish":
                this.changeActionText("Gelukt!");
                this.setState({crack_finish_state: true});
                break;
            default:
                break;
        }
    }

    changeActionText(text){
        this.setState({crack_action_text: text});
    }

    resetContent(){
        this.setState({
            crack_place_state: false,
            crack_lever_state: false,
            crack_finish_state: false
        })
    }

    render(){
        return(
            <section class="crack">
                <h1 class="crack__action">{this.state.crack_action_text}</h1>
                {(this.state.crack_place_state && <CrackPlace changeContent={this.changeContent.bind(this)} changeActionText={this.changeActionText.bind(this)}/>)  
                ||
                (this.state.crack_lever_state && <CrackLever changeContent={this.changeContent.bind(this)} changeActionText={this.changeActionText.bind(this)}/>)
                ||
                (this.state.crack_finish_state && <CrackFinish changeContent={this.props.changeContent} crack_finish_content={this.props.crack_finish_content} changeActionText={this.changeActionText.bind(this)}/>)
                }
            </section>
        )
    }
}

export default Crack;