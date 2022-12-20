import React, { useEffect } from 'react';
import './SettingsMenu.scss';

import Switch from '@mui/material/Switch';

class SettingsMenu extends React.Component{
    state = {
        title: "Instellingen",
        vibration: "Vibratie",
        reset: "Opnieuw proberen",
        icon_refresh_image_path: "/img/icon_refresh.png",
    };

    updateLanguage(new_language){
        this.resetLanguageButtonStyling();
        this.props.updateLanguage(new_language);
        switch (new_language){
            case "NL":
                this.setState({language_button_style_nl: ""});
                break;
            case "EN":
                this.setState({language_button_style_en: ""});
                break;
            default:
                break;
        }
    }
    
    resetLanguageButtonStyling(){
        this.setState({
            language_button_style_nl: "--inactive",
            language_button_style_en: "--inactive",
        })
    }

    render(){
        var title;
        var vibrations;
        var restart;
        var language_button_nl = <button class={"settingsMenu__languages__button button button--green"} onClick={() => this.updateLanguage("NL")} >Nederlands</button>;
        var language_button_en = <button class={"settingsMenu__languages__button button button--green"} onClick={() => this.updateLanguage("EN")} >English</button>;
        if(this.props.data_language != "NL"){
            language_button_nl = <button class={"settingsMenu__languages__button button button--green--inactive"} onClick={() => this.updateLanguage("NL")} >Nederlands</button>;
            title = <h1 class="settingsMenu__heading">Settings</h1>;
            vibrations = <h2 class="settingsMenu__toggles__toggleOption__text">Vibrations</h2>;
            restart = <button class="settingsMenu__button button button--red" onClick={() => this.props.toggleComponent("confirmation_modal")}>Restart<img class="settingsMenu__button__image" src={this.state.icon_refresh_image_path}/></button>
        } 
        if(this.props.data_language != "EN"){
            title = <h1 class="settingsMenu__heading">Instellingen</h1>;
            vibrations = <h2 class="settingsMenu__toggles__toggleOption__text">Vibraties</h2>;
            language_button_en = <button class={"settingsMenu__languages__button button button--green--inactive"} onClick={() => this.updateLanguage("EN")} >English</button>;
            restart = <button class="settingsMenu__button button button--red" onClick={() => this.props.toggleComponent("confirmation_modal")}>Herstarten<img class="settingsMenu__button__image" src={this.state.icon_refresh_image_path}/></button>

        }
        
        return(
            <section class="settingsMenu">
                {title}
                <article class="settingsMenu__languages">
                    {language_button_nl}
                    {language_button_en}
                </article>
                <article class="settingsMenu__toggles">
                    <hr class="settingsMenu__toggles__hr" />
                    <section class="settingsMenu__toggles__toggleOption">
                        {vibrations}
                        <Switch checked={this.props.settings_vibrations} onChange={() => this.props.updateSettings("vibrations", !this.props.settings_vibrations)}/>
                    </section>
                    <hr class="settingsMenu__toggles__hr" />
                </article>
                {restart}
            </section>
        )
    }
}

export default SettingsMenu;