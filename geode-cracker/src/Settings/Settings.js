import React from 'react';
import { withRouter } from 'react-router-dom';
import './Settings.scss';
import SettingsMenu from './Components/SettingsMenu';
import SettingsConfirmation from './Components/SettingsConfirmation';

class Settings extends React.Component{
    state = {
        icon_cogwheel_image_path: "/img/icon_cogwheel.png",
        settings_modal_state: false,
        confirmation_modal_state: false
    };

    toggleComponent(name){
        switch (name) {
            case "settings_modal":
                this.setState({settings_modal_state: !this.state.settings_modal_state});
                break;
            case "confirmation_modal":
                this.setState({confirmation_modal_state: !this.state.confirmation_modal_state});
                break;
            default:
                break;
        }
    }

    settingsRestart(){
        console.log("Change Route to restart");
    }

    render(){
        return(
            <section class="settings">
                <button class="settings__button button--image" onClick={() => this.toggleComponent("settings_modal")}>
                    <figure>
                        <img class="settings__button__image" src={this.state.icon_cogwheel_image_path}></img>
                    </figure>
                </button>
                {(this.state.confirmation_modal_state || this.state.settings_modal_state) && <div class="settings__modal">
                {this.state.confirmation_modal_state && <SettingsConfirmation settingsRestart={this.settingsRestart.bind(this)} toggleComponent={this.toggleComponent.bind(this)} />}
                {this.state.settings_modal_state && <SettingsMenu toggleComponent={this.toggleComponent.bind(this)}/>}   
                </div>}

            </section>
        )
    }
}

export default Settings;