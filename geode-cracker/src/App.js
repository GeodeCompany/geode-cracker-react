import React from 'react';
import './App.scss';

import BannerTop from "./Banner/Banner-top";
import BannerBottom from "./Banner/Banner-bottom";
import Syntax from "./Syntax/Syntax";
import Settings from "./Settings/Settings";
import Collection from "./Collection/Collection";
import MascotChoice from "./Mascot/MascotChoice";
import MascotNext from "./Mascot/MascotNext";
import MascotHelp from "./Mascot/MascotHelp";

import Polish from "./Polish/Polish";
import Crack from "./Crack/Crack";

class App extends React.Component{
  state = {
    mascot_next_state: true,
    mascot_choice_state: false,
    mascot_help_state: false,

    crack_state: false, 
    polish_state: false,   
  };

  changeContent(component){
    console.log("changeContent(): change content to " + component);
    this.resetContent();
    switch(component){
      case "mascot_next":
        this.toggleComponent("mascot_next");
        break;
      case "mascot_choice":
        this.toggleComponent("mascot_choice");
        break;
      case "mascot_help":
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
      case "mascot_next":
        this.setState({mascot_next_state: !this.mascot_next_state});
        break;
      case "mascot_choice":
        this.setState({mascot_choice_state: !this.mascot_choice_state});
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
      mascot_next_state: false,
      mascot_choice_state: false,
      mascot_help_state: false,

      polish_state: false,
      crack_state: false,
      collection_state: false,
    });
  };

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
          

          {this.state.mascot_next_state && <MascotNext />}
          {this.state.mascot_choice_state && <MascotChoice />}
          {this.state.mascot_help_state && <MascotHelp />}

          {this.state.polish_state && <Polish />}
          {this.state.crack_state && <Crack />}
          {this.state.collection_state && <Collection />}
        </article>
      </section>
    )
  };
}

export default App;
