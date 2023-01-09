import React from 'react';
import './SettingsConfirmation.scss'

class SettingsConfirmation extends React.Component{
    render(){
        var title;
        var text_button_left;
        var text_button_right;
        if(this.props.data_language == "NL"){
            title = "Wil je opnieuw beginnen?";
            text_button_left = "Nee";
            text_button_right = "Ja";
        } 
        if(this.props.data_language == "EN"){
            title = "Do you want to restart?";
            text_button_left = "No";
            text_button_right = "Yes";
        }
        return(
            <section class="settingsConfirmation">
                <article class="settingsConfirmation__modal">
                    <h2 class="settingsConfirmation__modal__title">{title}</h2>
                    <section class="settingsConfirmation__modal__choice">
                        <button class="settingsConfirmation__modal__choice__button button button--green" onClick={() => this.props.toggleComponent("confirmation_modal")}>{text_button_left}</button>
                        <button class="settingsConfirmation__modal__choice__button button button--red" onClick={() => {this.props.toggleComponent("confirmation_modal"); this.props.toggleComponent("settings_modal"); this.props.settingsRestart();}}>{text_button_right}</button>
                    </section>
                </article>
            </section>
        )
    }
}

export default SettingsConfirmation;