import React from 'react';
import './Syntax.css';

import ColorCard from "./Components/ColorCard";

class Syntax extends React.Component{
    render(){
        return(
            <section class="syntaxSection">
                <article class="syntaxContainer__article">
                    <h1 class="syntaxContainer__article__title"> | Colors </h1>
                    <ColorCard color={"#202020"} syntax={"--background-color"}/>
                    <ColorCard color={"#2F3033"} syntax={"--banner-background-dark-color"}/>
                    <ColorCard color={"#3C3E42"} syntax={"--banner-background-light-color"}/>
                    <ColorCard color={"#F93F35"} syntax={"--naturalis-red-color"}/>
                    <ColorCard color={"#489F58"} syntax={"--naturalis-green-color"}/>
                    <ColorCard color={"#FA6B00"} syntax={"--error-color"}/>
                    <ColorCard color={"#A5D7B9"} syntax={"--inactive-red-color"}/>
                    <ColorCard color={"#B96560"} syntax={"--inactive-green-color"}/>
                    <ColorCard color={"#FFFFFF"} syntax={"--white-color"}/>
                    <ColorCard color={"#000000"} syntax={"--black-color"}/>
                </article>
            </section>
        
        )
    }
}

export default Syntax;