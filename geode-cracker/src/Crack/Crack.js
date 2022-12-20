import React from 'react';
import './Crack.scss';

class Crack extends React.Component{
    state = {
        startup_state: true,
        crack_action_text: "Plaats de Geode",
        crack_action_text_place: "placeholder",
        crack_action_text_lever: "placeholder",
        crack_action_text_finish: "placeholder",

        crack_mascot_text_place: "placeholder",
        crack_mascot_text_lever: "placeholder",
        crack_mascot_text_finish: "placeholder",

        crack_lever_state: "up",
        crack_geode_dirty_left_state: "",
        crack_geode_dirty_right_state: "",

        crack_geode_base_image_path: "/img/geode_base.png",
        crack_geode_cracked_image_path: "/img/geode_cracked.png",
        crack_geode_dirty_image_path: "/img/geode_dirty.png",
        crack_geode_outline_image_path: "/img/geode_outline.png",
        crack_press_base_image_path: "/img/press_base.png",
        crack_press_top_image_path: "/img/press_top.png",
        crack_press_stamp_image_path: "/img/press_stamp.png",
        crack_press_lever_image_path: "/img/press_lever.png",
    };

    changeContent(name){
        switch (name) {
            case "crack_placed":
                document.getElementById("geode_outline").style.display = "none";
                document.getElementById("triggerbox_crack_placed").style.display = "none";

                document.getElementById("geode_base").style.display = "block";
                document.getElementById("triggerbox_crack_lever_up").style.display = "block";
                break;
            case "crack_lever_up":
                document.getElementById("triggerbox_crack_lever_up").style.display = "none";
                this.setState({crack_lever_state:"down"});
                setTimeout(() => document.getElementById("geode_base").style.display = "none", 1000);
                setTimeout(() => document.getElementById("geode_cracked").style.display = "block", 1000);
                setTimeout(() => document.getElementById("triggerbox_crack_lever_down").style.display = "block", 1000);
                break;
            case "crack_lever_down":
                document.getElementById("geode_cracked").style.display = "none";
                document.getElementById("triggerbox_crack_lever_down").style.display = "none";
                this.setState({crack_lever_state:"up"});
  
                document.getElementById("geode_dirty_left").style.display = "block";
                document.getElementById("geode_dirty_right").style.display = "block";
                setTimeout(() => document.getElementById("geode_dirty_left").classList.add("crack__figure__image--geode--dirty--left"), 100);
                setTimeout(() => document.getElementById("geode_dirty_right").classList.add("crack__figure__image--geode--dirty--right"), 100);
                setTimeout(() => this.props.changeContent("crack_finish"), 5000);
                break;
        }
    }
    
    updateData(data_JSON, geode){
        this.setState({
            crack_action_text_place: "replaced",
            crack_action_text_lever: "replaced",
            crack_action_text_finish: "replaced",

            crack_mascot_help_place: "replaced",
            crack_mascot_help_lever: "replaced",
            crack_mascot_help_finish: "replaced",
        })
    }

    changeActionText(text){
        this.setState({crack_action_text: text});
    }

    render(){
        // this.updateData(this.props.data_JSON, this.props.data_geode);
        return(
            <section class="crack">
                <h1 class="crack__action">{this.state.crack_action_text}</h1>
                <figure class="crack__figure">
                    <img id="geode_base" class="crack__figure__image--geode" src={this.state.crack_geode_base_image_path}></img>
                    <img id="geode_cracked" class="crack__figure__image--geode" src={this.state.crack_geode_cracked_image_path}></img>
                    <img id="geode_dirty_left" class="crack__figure__image--geode" src={this.state.crack_geode_dirty_image_path}></img>
                    <img id="geode_dirty_right" class="crack__figure__image--geode" src={this.state.crack_geode_dirty_image_path}></img>
                    <img id="geode_outline" class="crack__figure__image--geode" src={this.state.crack_geode_outline_image_path}></img>
                    <img id="press_base" class="crack__figure__image--press--base" src={this.state.crack_press_base_image_path}></img>
                    <img id="press_lever" class={"crack__figure__image--press--lever crack__figure__image--press--lever--" + this.state.crack_lever_state} src={this.state.crack_press_lever_image_path}></img>
                    <img id="press_stamp" class={"crack__figure__image--press--stamp crack__figure__image--press--stamp--" + this.state.crack_lever_state} src={this.state.crack_press_stamp_image_path}></img>
                    <img id="press_top" class="crack__figure__image--press--top" src={this.state.crack_press_top_image_path}></img>
                    <button id="triggerbox_crack_placed" class="crack__figure__button crack__figure__button--placed button--triggerbox" onClick={() => this.changeContent("crack_placed")}>LEVER</button>
                    <button id="triggerbox_crack_lever_up" class="crack__figure__button crack__figure__button--lever--up button--triggerbox" onClick={() => this.changeContent("crack_lever_up")}>LEVER</button>
                    <button id="triggerbox_crack_lever_down" class="crack__figure__button crack__figure__button--lever--down button--triggerbox" onClick={() => this.changeContent("crack_lever_down")}>LEVER</button>
                </figure>
            </section>
        )
    }
}

export default Crack;