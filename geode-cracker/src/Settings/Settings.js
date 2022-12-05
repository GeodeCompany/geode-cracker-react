import React from 'react';
import './Settings.scss';
import SettingsConfirmation from './Components/SettingsConfirmation';
import Switch from '@mui/material/Switch';

class Settings extends React.Component{
    state = {
        settings: "Instellingen",
        dutch: "",
        english: "--inactive",
        vibration: "Vibratie",
        sound: "Geluid",
        reset: "Opnieuw proberen",
        icon_refresh_image_path: "/img/icon_refresh.png"
    }

    render(){
        return(
            <section class="settingsSection">
                <SettingsConfirmation />
                <h1 class="settingsSection__heading">{this.state.settings}</h1>
                <article class="settingsSection__languages">
                    <button class={"settingsSection__languages__button button button--green" + this.state.dutch}>Nederlands</button>
                    <button class={"settingsSection__languages__button button button--green" + this.state.english}>English</button>
                </article>
                <article class="settingsSection__toggles">
                    <section class="settingsSection__toggles__toggleOption">
                        <h2 class="settingsSection__toggles__toggleOption__text">{this.state.vibration}</h2>
                        <Switch defaultChecked />
                    </section>
                    <hr class="settingsSection__toggles__hr" />
                    <section class="settingsSection__toggles__toggleOption">
                        <h2 class="settingsSection__toggles__toggleOption__text">{this.state.sound}</h2>
                        <Switch defaultChecked />
                    </section>
                    
                </article>
                <button class="settingsSection__button button button--red">
                    {this.state.reset}
                    <img class="settingsSection__button__image" src={this.state.icon_refresh_image_path}/>
                </button>
            </section>
        )
    }
}

export default Settings;