import React from 'react';
import './App.scss';

import BannerTop from "./Banner/Banner-top";
import BannerBottom from "./Banner/Banner-bottom";
import Syntax from "./Syntax/Syntax";
import Settings from "./Settings/Settings";
import Collection from "./Collection/Collection";
import MascotCard from './Mascot/MascotCard';
import MascotHelp from "./Mascot/MascotHelp";

import Polish from "./Polish/Polish";
import Crack from "./Crack/Crack";

class App extends React.Component{
  state = {
    mascot_text: "placeholder",
    mascot_type: "placeholder",
    mascot_card_state: false,
    mascot_help_state: false,

    crack_state: false, 
    polish_state: false,   
  };

  changeContent(component){
    console.log("changeContent(): change content to " + component);
    this.resetContent();
    switch(component){
      case "mascot_next":
        this.updateMascot("next", "mascot_next");
        this.toggleComponent("mascot_card");
        break;
      case "mascot_choice":
        this.updateMascot("choice", "mascot_choice");
        this.toggleComponent("mascot_card");
        break;
      case "mascot_help":
        this.updateMascot("help", "mascot_help");
        this.toggleComponent("mascot_help");
        break;
      case "crack":
        this.toggleComponent("crack");
        this.toggleComponent("mascot_help");
        break;
      case "polish":
        this.toggleComponent("polish");
        this.toggleComponent("mascot_help");
        break;
      case "collection":
        this.toggleComponent("collection");
        break;
      default:
        console.log("toggleComponent(): ERROR! Could not find " + component);
        break;
    }
  };

  toggleComponent(component){
    console.log("toggleComponent(): toggle component named " + component)
    switch(component){
      case "mascot_card":
        this.setState({mascot_card_state: !this.mascot_card_state});
        break;
      case "mascot_help":
        this.setState({mascot_help_state: !this.mascot_help_state});
        break;
      case "crack":
        this.setState({crack_state: !this.crack_state});
        break;
      case "polish":
        this.setState({polish_state: !this.polish_state});
        break;
      case "collection":
        this.setState({collection_state: !this.collection_state});
        break;
      default:
        console.log("toggleComponent(): ERROR! Could not find " + component);
        break;
    }
  }

  resetContent(){
    this.setState({
      mascot_card_state: false,
      mascot_help_state: false,

      polish_state: false,
      crack_state: false,
      collection_state: false,
    });
  };

  updateMascot(type, text){
    this.setState({
      mascot_type: type,
      mascot_text: text,
    })
  }

  render(){
    return(
      <section>
        <BannerTop />
        <Settings />
        <article class="testing">
          <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_next")}>toggleComponent("mascot_next")</button>
          <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_choice")}>toggleComponent("mascot_choice")</button>
          <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_help")}>toggleComponent("mascot_help")</button>
          <button class="testing__button button button--green" onClick={() => this.changeContent("crack")}>toggleComponent("crack")</button>
          <button class="testing__button button button--green" onClick={() => this.changeContent("polish")}>toggleComponent("polish")</button>
          <button class="testing__button button button--green" onClick={() => this.changeContent("collection")}>toggleComponent("collection")</button>
        </article>
        <article class="content">
          

          {this.state.mascot_card_state && <MascotCard mascot_type={this.state.mascot_type} mascot_text={this.state.mascot_text} changeContent={this.changeContent.bind(this)} />}
          {this.state.mascot_help_state && <MascotHelp mascot_text={this.state.mascot_text} />}

          {this.state.polish_state && <Polish />}
          {this.state.crack_state && <Crack />}
          {this.state.collection_state && <Collection />}
        </article>
      </section>
    )
  };
}

export default App;
