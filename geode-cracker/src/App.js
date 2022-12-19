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

import data_NL from './data_NL.json';
import data_EN from './data_EN.json';

class App extends React.Component{
  state = {
    startup_state: true,
    data_JSON: data_NL,
    data_geode: "placeholder",
    data_language: "placeholder",
    data_language_default: "NL",

    settings_vibrations: true,
    settings_restart_content: "start",

    mascot_text: "placeholder",
    mascot_type: "placeholder",
    mascot_next_content: "placeholder",
    mascot_choice_left_text: "placeholder",
    mascot_choice_right_text: "placeholder",
    mascot_choice_left_content: "placeholder",
    mascot_choice_right_content: "placeholder",

    mascot_card_state: false,
    mascot_help_state: false,

    start_mascot_text: "start_mascot_text",
    start_mascot_next_content: "crack",

    crack_state: false,
    crack_finish_content: "crack_finish",

    crack_finish_mascot_text: "crack_finish_mascot_text",
    crack_finish_mascot_next_content: "polish",

    polish_state: false, 
    polish_finish_content: "polish_finish", 

    polish_finish_mascot_text: "polish_finish_mascot_text",
    polish_finish_mascot_next_content: "redirect_inspect",

    default_mascot_text: "default_mascot_text",
    default_mascot_next_content: "default",
  };

  changeContent(new_content){
    console.log("changeContent(): change content to " + new_content);
    this.resetContent();
    // Reference: updateMascot(type, text, next_content, choice_left_text, choice_right_text, choice_left_content, choice_right_content);
    switch(new_content){
      // case "mascot_next":
      //   this.updateMascot("next", "mascot_next", "mascot_choice", "", "", "", "");
      //   this.toggleComponent("mascot_card");
      //   break;
      // case "mascot_choice":
      //   this.updateMascot("choice", "mascot_choice", "", "to crack", "to polish", "crack", "polish");
      //   this.toggleComponent("mascot_card");
      //   break;
      // case "mascot_help":
      //   this.updateMascot("help", "mascot_help", "", "", "", "", "", "");
      //   this.toggleComponent("mascot_help");
      //   break;
      case "start":
        this.updateMascot("next", this.state.start_mascot_text, "crack", "", "", "", "");
        this.toggleComponent("mascot_card");
        break;
      case "crack":
        this.toggleComponent("crack");
        this.toggleComponent("mascot_help");
        break;
      case "crack_finish":
        this.updateMascot("next", this.state.crack_finish_mascot_text, this.state.crack_finish_mascot_next_content, "", "", "", "");
        this.toggleComponent("mascot_card");
        break;
      case "polish":
        this.toggleComponent("polish");
        this.toggleComponent("mascot_help");
        break;
      case "polish_finish":
        this.updateMascot("next", this.state.polish_finish_mascot_text, this.state.polish_finish_mascot_next_content, "", "", "", "");
        this.toggleComponent("mascot_card");
        break;
      case "redirect_inspect":
        this.redirect("http://www.w3schools.com");
        break;
      case "collection":
        this.toggleComponent("collection");
        break;
      default:
        this.updateMascot("next", this.state.default_mascot_text, this.state.default_mascot_next_content, "", "", "", "");
        this.toggleComponent("mascot_card");
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
        console.log("toggleComponent(): Could not find " + component);
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

  startUp(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.setState({
      data_language: this.state.data_language_default
    })
    if(urlParams.get("content") != null && urlParams.get("geode") != null){
      this.changeContent(urlParams.get("content"));
      this.setState({
        data_geode: urlParams.get("geode")
      })
    } else {
      this.changeContent("default");
    }
    
  }

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

  updateMascotText(new_mascot_text){
    this.setState({
      mascot_text: new_mascot_text
    })
  }

  updateLanguage(new_language){
    console.log("updateLanguage(): update language to " + new_language);
    this.setState({data_language: new_language})
    this.updateData(new_language);
  }

  updateData(new_language){
    console.log("updateData(): update data_JSON to data_" + new_language);
    switch (new_language) {
      case "NL":
          this.setState({data_JSON: data_NL});
          break;

      case "EN":
        this.setState({data_JSON: data_EN});
          break;
    };
  }

  updateSettings(setting, new_state){
    console.log("updateSettings(): updating " + setting + " to " + new_state);
    switch(setting){
      case "vibrations":
        this.setState({settings_vibrations: new_state});
        break;
      default:
        break;
    }
  }

  redirect(url){
    window.location.replace(url);
  }

  render(){
    if(this.state.startup_state){
      this.startUp();
      this.setState({startup_state: false});
    }

    return(
      <section>
        <BannerTop />
        <Settings data_JSON={this.state.data_JSON} data_language={this.state.data_language} settings_vibrations={this.state.settings_vibrations} settings_restart_content={this.state.settings_restart_content} changeContent={this.changeContent.bind(this)} updateLanguage={this.updateLanguage.bind(this)} updateSettings={this.updateSettings.bind(this)}/>
        <article class="testing">
          {/* <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_next")}>mascot_next</button> */}
          {/* <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_choice")}>mascot_choice</button> */}
          {/* <button class="testing__button button button--red" onClick={() => this.changeContent("mascot_help")}>mascot_help</button> */}
          {/* <button class="testing__button button button--red" onClick={() => this.changeContent("crack")}>crack</button> */}
          {/* <button class="testing__button button button--red" onClick={() => this.changeContent("polish")}>polish</button> */}
          {/* <button class="testing__button button button--red" onClick={() => this.changeContent("collection")}>Collection</button> */}
          {/* <button class="testing__button button button--green" onClick={() => this.changeContent("start")}>Start</button> */}
        </article>
        <article class="content">
          {this.state.mascot_card_state && <MascotCard mascot_type={this.state.mascot_type} mascot_text={this.state.mascot_text} changeContent={this.changeContent.bind(this)} mascot_next_content={this.state.mascot_next_content} mascot_choice_left_text={this.state.mascot_choice_left_text} mascot_choice_right_text={this.state.mascot_choice_right_text} mascot_choice_left_content={this.state.mascot_choice_left_content} mascot_choice_right_content={this.state.mascot_choice_right_content}/>}
          {this.state.mascot_help_state && <MascotHelp mascot_text={this.state.mascot_text} />}

          {this.state.crack_state && <Crack data_JSON={this.state.data_JSON} settings_vibrations={this.settings_vibrations} changeContent={this.changeContent.bind(this)} updateMascotText={this.updateMascotText.bind(this)} crack_finish_content={this.state.crack_finish_content} />}
          {this.state.polish_state && <Polish data_JSON={this.state.data_JSON} settings_vibrations={this.settings_vibrations} changeContent={this.changeContent.bind(this)} updateMascotText={this.updateMascotText.bind(this)} polish_finish_content={this.state.polish_finish_content} />}
          {this.state.collection_state && <Collection data_JSON={this.state.data_JSON} />}
        </article>
      </section>
    )
  };
}

export default App;
