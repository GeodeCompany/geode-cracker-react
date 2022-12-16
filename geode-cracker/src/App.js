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
    mascot_next_content: "crack",
    mascot_choice_left_text: "crack",
    mascot_choice_right_text: "polish",
    mascot_choice_left_content: "crack",
    mascot_choice_right_content: "polish",

    mascot_card_state: false,
    mascot_help_state: false,

    crack_state: false,
    crack_finish_content: "polish",
    
    polish_state: false,   
  };

  changeContent(component){
    console.log("changeContent(): change content to " + component);
    this.resetContent();
    // type, text, next_content, choice_left_text, choice_right_text, choice_left_content, choice_right_content
    switch(component){
      case "mascot_next":
        this.updateMascot("next", "mascot_next", "mascot_choice", "", "", "", "");
        this.toggleComponent("mascot_card");
        break;
      case "mascot_choice":
        this.updateMascot("choice", "mascot_choice", "", "to crack", "to polish", "crack", "polish");
        this.toggleComponent("mascot_card");
        break;
      case "mascot_help":
        this.updateMascot("help", "mascot_help", "", "", "", "", "", "");
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
      case "start":
        this.updateMascot("next", "Welkom in de app!", "crack", "", "", "", "");
        this.toggleComponent("mascot_card");
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

  updateMascot(type, text, next_content, choice_left_text, choice_right_text, choice_left_content, choice_right_content){
    this.setState({
      mascot_type: type,
      mascot_text: text,
      mascot_next_content: next_content,
      mascot_choice_left_text: choice_left_text,
      mascot_choice_right_text: choice_right_text,
      mascot_choice_left_content: choice_left_content,
      mascot_choice_right_content: choice_right_content,
    })
  }

  render(){
    return(
      <section>
        <BannerTop />
        <Settings />
        <article class="testing">
          <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_next")}>mascot_next</button>
          <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_choice")}>mascot_choice</button>
          <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_help")}>mascot_help</button>
          <button class="testing__button button button--red" onClick={() => this.changeContent("crack")}>crack</button>
          <button class="testing__button button button--red" onClick={() => this.changeContent("polish")}>polish</button>
          <button class="testing__button button button--red" onClick={() => this.changeContent("collection")}>Collection</button>
          <button class="testing__button button button--green" onClick={() => this.changeContent("start")}>Start</button>
        </article>
        <article class="content">
          

          {this.state.mascot_card_state && <MascotCard mascot_type={this.state.mascot_type} mascot_text={this.state.mascot_text} changeContent={this.changeContent.bind(this)} mascot_next_content={this.state.mascot_next_content} mascot_choice_left_text={this.state.mascot_choice_left_text} mascot_choice_right_text={this.state.mascot_choice_right_text} mascot_choice_left_content={this.state.mascot_choice_left_content} mascot_choice_right_content={this.state.mascot_choice_right_content}/>}
          {this.state.mascot_help_state && <MascotHelp mascot_text={this.state.mascot_text} />}

          {this.state.crack_state && <Crack changeContent={this.changeContent.bind(this)} crack_finish_content={this.state.crack_finish_content} />}
          {this.state.polish_state && <Polish />}
          {this.state.collection_state && <Collection />}
        </article>
      </section>
    )
  };
}

export default App;
