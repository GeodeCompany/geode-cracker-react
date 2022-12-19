import React from 'react';
import './SettingsMenu.scss';

import Switch from '@mui/material/Switch';

class SettingsMenu extends React.Component{
    state = {
        title: "Instellingen",
        dutch: "",
        english: "--inactive",
        vibration: "Vibratie",
        sound: "Geluid",
        reset: "Opnieuw proberen",
        icon_refresh_image_path: "/img/icon_refresh.png",
    };

    render(){
        return(
            <section class="settingsMenu">
                <h1 class="settingsMenu__heading">{this.state.title}</h1>
                <article class="settingsMenu__languages">
                    <button class={"settingsMenu__languages__button button button--green" + this.state.dutch}>Nederlands</button>
                    <button class={"settingsMenu__languages__button button button--green" + this.state.english}>English</button>
                </article>
                <article class="settingsMenu__toggles">
                    <hr class="settingsMenu__toggles__hr" />
                    <section class="settingsMenu__toggles__toggleOption">
                        <h2 class="settingsMenu__toggles__toggleOption__text">{this.state.vibration}</h2>
                        <Switch defaultChecked />
                    </section>
                    <hr class="settingsMenu__toggles__hr" />
                    
                </article>
                <button class="settingsMenu__button button button--red" onClick={() => this.props.toggleComponent("confirmation_modal")}>
                    {this.state.reset}
                    <img class="settingsMenu__button__image" src={this.state.icon_refresh_image_path}/>
                </button>
            </section>
        )
    }
}

export default SettingsMenu;