import React from 'react';
import './ColorCard.css';

class ColorCard extends React.Component{
    render(){
        return(
            <section class="colorCard">
                <div class="colorCard__block" style={{background: this.props.color}}>
                    <span class="colorCard__block__text">{this.props.color}</span>
                </div>
                <p class="colorCard__text"> var({this.props.syntax}) </p>
            </section>
            
        )
    }
}

export default ColorCard;
