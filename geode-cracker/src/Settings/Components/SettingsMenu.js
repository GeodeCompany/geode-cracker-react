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
            case "nl":
                this.setState({language_button_style_nl: ""});
                break;
            case "en":
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
        var language_button_nl = <button class={"settingsMenu__languages__button button button--green"} onClick={() => this.updateLanguage("nl")} >Nederlands</button>;
        var language_button_en = <button class={"settingsMenu__languages__button button button--green"} onClick={() => this.updateLanguage("en")} >English</button>;
        if(this.props.data_language != "nl"){language_button_nl = <button class={"settingsMenu__languages__button button button--green--inactive"} onClick={() => this.updateLanguage("nl")} >Nederlands</button>;} 
        if(this.props.data_language != "en"){language_button_en = <button class={"settingsMenu__languages__button button button--green--inactive"} onClick={() => this.updateLanguage("en")} >English</button>;}
        
        return(
            <section class="settingsMenu">
                <h1 class="settingsMenu__heading">{this.state.title}</h1>
                <article class="settingsMenu__languages">
                    {language_button_nl}
                    {language_button_en}
                </article>
                <article class="settingsMenu__toggles">
                    <hr class="settingsMenu__toggles__hr" />
                    <section class="settingsMenu__toggles__toggleOption">
                        <h2 class="settingsMenu__toggles__toggleOption__text">{this.state.vibration}</h2>
                        <Switch checked={this.props.settings_vibrations} onChange={() => this.props.updateSettings("vibrations", !this.props.settings_vibrations)}/>
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