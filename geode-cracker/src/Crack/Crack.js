import React from 'react';
import './Crack.scss';
import MascotHelp from '../Mascot/MascotHelp';

class Crack extends React.Component{
    state = {
        startup_state: true,
        crack_action_state: "place",
        crack_action_text_place: "placeholder",
        crack_action_text_lever: "placeholder",
        crack_action_text_finish: "placeholder",

        mascot_help_state: "place",
        mascot_help_text_place: "plaats geode",
        mascot_help_text_lever_up: "haal de hendel omlaag",
        mascot_help_text_lever_down: "haal de handel weer omhoog",

        crack_lever_state: "up",
        crack_geode_dirty_left_state: "",
        crack_geode_dirty_right_state: "",

        crack_geode_close_image_path: "placeholder",
        crack_geode_crack_image_path: "placeholder",
        crack_geode_dirty_left_image_path: "placeholder",
        crack_geode_dirty_right_image_path: "placeholder",
        crack_geode_outline_image_path: "/img/geode_outline.png",
        crack_press_base_image_path: "/img/press_base.png",
        crack_press_top_image_path: "/img/press_top.png",
        crack_press_stamp_image_path: "/img/press_stamp.png",
        crack_press_lever_image_path: "/img/press_lever.png",

        crack_audio_geode_place: new Audio("/sound/crack_audio_geode_place.wav"),
        crack_audio_geode_crack: new Audio("/sound/crack_audio_geode_crack.wav"),
        crack_audio_geode_open: new Audio("/sound/crack_audio_geode_open.wav"),
        crack_audio_completion_sound: new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"),
    };

    changeContent(name){
        switch (name) {
            case "crack_placed":
                this.state.crack_audio_geode_place.play();
                this.setState({mascot_help_state: "lever_up"});
                this.setState({crack_action_state: "lever"});
                document.getElementById("geode_outline").style.display = "none";
                document.getElementById("triggerbox_crack_placed").style.display = "none";

                document.getElementById("geode_base").style.display = "block";
                document.getElementById("triggerbox_crack_lever_up").style.display = "block";
                break;
            case "crack_lever_up":
                this.setState({mascot_help_state: "lever_down"});
                document.getElementById("triggerbox_crack_lever_up").style.display = "none";
                this.setState({crack_lever_state:"down"});
                setTimeout(() => document.getElementById("geode_base").style.display = "none", 1000);
                setTimeout(() => this.state.crack_audio_geode_crack.play(), 1000);
                setTimeout(() => document.getElementById("geode_cracked").style.display = "block", 1000);
                setTimeout(() => document.getElementById("triggerbox_crack_lever_down").style.display = "block", 1000);
                setTimeout(() => this.changeContent("crack_lever_down"), 1100);
                break;
            case "crack_lever_down":
                this.state.crack_audio_completion_sound.play();
                this.setState({mascot_help_state: "none"})
                this.setState({crack_action_state: "finish"});
                document.getElementById("geode_cracked").style.display = "none";
                document.getElementById("triggerbox_crack_lever_down").style.display = "none";
                this.setState({crack_lever_state:"up"});
  
                this.state.crack_audio_geode_open.play();
                document.getElementById("geode_dirty_left").style.display = "block";
                document.getElementById("geode_dirty_right").style.display = "block";
                setTimeout(() => document.getElementById("geode_dirty_left").classList.add("crack__figure__image--geode--dirty--left"), 100);
                setTimeout(() => document.getElementById("geode_dirty_right").classList.add("crack__figure__image--geode--dirty--right"), 100);
                setTimeout(() => this.props.changeContent("crack_finish"), 2000);
                break;
        }
    }
    
    updateData(data_JSON, geode){
        this.state.crack_action_text_place = data_JSON.crack.place.title;
        this.state.crack_action_text_lever = data_JSON.crack.lever.title;
        this.state.crack_action_text_finish = data_JSON.crack.finish.title;

        this.state.mascot_help_text_place = data_JSON.crack.place.mascot;
        this.state.mascot_help_text_lever_up = data_JSON.crack.lever.mascot_up;
        this.state.mascot_help_text_lever_down = data_JSON.crack.lever.mascot_down;

        this.state.crack_geode_close_image_path = data_JSON.collection[geode].geode_close_image_path;
        this.state.crack_geode_crack_image_path = data_JSON.collection[geode].geode_crack_image_path;
        this.state.crack_geode_dirty_left_image_path = data_JSON.collection[geode].geode_dirty_image_path;
        this.state.crack_geode_dirty_right_image_path = data_JSON.collection[geode].geode_close_image_path;
    }

    changeActionText(text){
        this.setState({crack_action_text: text});
    }

    render(){
        this.updateData(this.props.data_JSON, this.props.data_geode);
        return(
            <section>
                {this.state.mascot_help_state === "place" && <MascotHelp mascot_text={this.state.mascot_help_text_place} />}
                {this.state.mascot_help_state === "lever_up" && <MascotHelp mascot_text={this.state.mascot_help_text_lever_up} />}
                {this.state.mascot_help_state === "lever_down" && <MascotHelp mascot_text={this.state.mascot_help_text_lever_down} />}
                <section class="crack">
                    {this.state.crack_action_state === "place" && <h1 class="crack__action">{this.state.crack_action_text_place}</h1>}
                    {this.state.crack_action_state === "lever" && <h1 class="crack__action">{this.state.crack_action_text_lever}</h1>}
                    {this.state.crack_action_state === "finish" && <h1 class="crack__action">{this.state.crack_action_text_finish}</h1>}
                    <figure class="crack__figure">
                        <img id="geode_base" class="crack__figure__image--geode" src={this.state.crack_geode_close_image_path}></img>
                        <img id="geode_cracked" class="crack__figure__image--geode" src={this.state.crack_geode_crack_image_path}></img>
                        <img id="geode_dirty_left" class="crack__figure__image--geode" src={this.state.crack_geode_dirty_left_image_path}></img>
                        <img id="geode_dirty_right" class="crack__figure__image--geode" src={this.state.crack_geode_dirty_right_image_path}></img>
                        <img id="geode_outline" class="crack__figure__image--geode" src={this.state.crack_geode_outline_image_path}></img>
                        <img id="press_base" class="crack__figure__image--press--base" src={this.state.crack_press_base_image_path}></img>
                        <img id="press_lever" class={"crack__figure__image--press--lever crack__figure__image--press--lever--" + this.state.crack_lever_state} src={this.state.crack_press_lever_image_path}></img>
                        <img id="press_stamp" class={"crack__figure__image--press--stamp crack__figure__image--press--stamp--" + this.state.crack_lever_state} src={this.state.crack_press_stamp_image_path}></img>
                        <img id="press_top" class="crack__figure__image--press--top" src={this.state.crack_press_top_image_path}></img>
                        <button id="triggerbox_crack_placed" class="crack__figure__button crack__figure__button--placed button--triggerbox" onClick={() => this.changeContent("crack_placed")} onTouchMove={() => this.changeContent("crack_placed")}>LEVER
                            <div class="animation--tapping animation--tapping__crack--place"></div>
                        </button>
                        <button id="triggerbox_crack_lever_up" class="crack__figure__button crack__figure__button--lever--up button--triggerbox" onClick={() => this.changeContent("crack_lever_up")} onTouchMove={() => this.changeContent("crack_lever_up")}>LEVER
                            <div class="animation--tapping animation--tapping__crack--lever"></div>
                        </button>
                        <button id="triggerbox_crack_lever_down" class="crack__figure__button crack__figure__button--lever--down button--triggerbox" onClick={() => this.changeContent("crack_lever_down")}>LEVER</button>
                    </figure>
                </section>
            </section>
        )
    }
}

export default Crack;