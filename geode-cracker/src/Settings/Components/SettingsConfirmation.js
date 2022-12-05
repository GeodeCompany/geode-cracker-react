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
            <section class="settingsSection__confirmationSection">
                <article class="settingsSection__confirmationSection__modal">
                    <h2 class="settingsSection__confirmationSection__modal__title">{this.state.title}</h2>
                    <section class="settingsSection__confirmationSection__modal__choice">
                        <button class="settingsSection__confirmationSection__modal__choice__button button button--green">{this.state.text_button_left}</button>
                        <button class="settingsSection__confirmationSection__modal__choice__button button button--red">{this.state.text_button_right}</button>
                    </section>
                </article>
            </section>
        )
    }
}

export default SettingsConfirmation;