import React from 'react';
import './SettingsConfirmation.scss'

class SettingsConfirmation extends React.Component{
    state = {
        title: "Wil je opnieuw beginnen?",
        text_button_left: "Nee",
        text_button_right: "Ja"
    }

    render(){
        return(
            <section class="settingsConfirmation">
                <article class="settingsConfirmation__modal">
                    <h2 class="settingsConfirmation__modal__title">{this.state.title}</h2>
                    <section class="settingsConfirmation__modal__choice">
                        <button class="settingsConfirmation__modal__choice__button button button--green" onClick={() => this.props.toggleComponent("confirmation_modal")}>{this.state.text_button_left}</button>
                        <button class="settingsConfirmation__modal__choice__button button button--red" onClick={() => {this.props.toggleComponent("confirmation_modal"); this.props.toggleComponent("settings_modal"); this.props.settingsRestart();}}>{this.state.text_button_right}</button>
                    </section>
                </article>
            </section>
        )
    }
}

export default SettingsConfirmation;