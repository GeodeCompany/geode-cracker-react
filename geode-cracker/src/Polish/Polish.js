import React from 'react';
import './Polish.scss';

import data_NL from '../data_NL.json';
import data_EN from '../data_EN.json';

class Polish extends React.Component{

    state = {
        brush_text: "Borstel de stukken los",
        wash_text: "Spoel de stukken weg",
        polish_text: "Poets de geode schoon",
        done_text: "Helemaal schoon!",

        start_positions: [[1.5, 22],[2.5, 4.5],[26, 24],[26, 0]],
        end_positions: [[27, 15],[28, 7],[23, 20],[21, 11]],

        interaction_state: "brush",
        rocks_clicked: [false, false, false, false],
        move_count: 0,
        max_move_count: 100,

        can_make_polish_sound: true,

        geode_image_path: "/img/geode.png",
        bucket_normal_image_path: "/img/bucket_normal.png",
        bucket_pour_image_path: "/img/bucket_pour.png",
        cloth_image_path: "/img/cloth.png",
        brush_image_path: "/img/brush.png",
        rock1_image_path: "/img/rock1.png",
        rock2_image_path: "/img/rock2.png",
        rock3_image_path: "/img/rock3.png",
        rock4_image_path: "/img/rock4.png",
        glimmer1_image_path: "/img/glimmers1.png",
        glimmer2_image_path: "/img/glimmers2.png",
        foam_image_path: "/img/foam.png",

        rock_sound: new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"),
        wash_sound: new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"),
        polish_sound: new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3")
    }

    updateData (language, geode) {
      var data;
      console.log(navigator.userAgent.indexOf('Linux'));
      switch (language) {
          case "NL":
              data = data_NL
              break;

          case "EN":
              data = data_EN
              break;
      };

      this.state.brush_text = data.clean.brush.title;
      this.wash_text = data.clean.water.title;
      this.polish_text = data.clean.wipe.title;
      this.done_text = data.clean.clean.title;

      for (let rock in data.colletion) {
        if (rock == geode) {
            this.state.geode_image_path = data.collection[rock].geode_clean_image_path;
            this.state.start_positions = data.collection[rock].geode_clean_start_positions;
            this.state.end_positions = data.collection[rock].geode_clean_end_positions;
        }
      }
    }

    startUp(){
      this.updateData("NL", "Amethyst");
      if (window.navigator.userAgent.indexOf("Mac") != -1){
        this.state.max_move_count = 500;
      } else if (window.navigator.userAgent.indexOf("Linux") != -1){
        this.state.max_move_count = 250;
      } else {
        this.state.max_move_count = 300;
      }
    }

    updateVisuals(){
      switch (this.state.interaction_state) {
        case "wash":
          document.getElementById("action_text").innerHTML = this.state.wash_text;
          document.getElementById("brush_img").style.visibility = "hidden";
          document.getElementById("bucket_img").style.visibility = "visible";
          break;
        case "polish":
          document.getElementById("action_text").innerHTML = this.state.polish_text;
          document.getElementById("bucket_img").style.visibility = "hidden";
          for(var i = 0; i < document.getElementsByClassName("polish__section__figure__rock").length; i++) {
            document.getElementsByClassName("polish__section__figure__rock")[i].style.visibility = "hidden";
          }
          document.getElementById("cloth_img").style.visibility = "visible";
          document.getElementById("percent_text").style.visibility = "visible";
          break;
      }
    }

    rockClick(rock_number){
      if(this.state.rocks_clicked[rock_number - 1] == false){
        this.state.rocks_clicked[rock_number - 1] = true;
        this.moveRock(rock_number);
        this.state.rock_sound.play();
        this.checkBrushDone();
      }
    }

    moveRock(rock_number){
      var rockString = "rock" + rock_number + "_img";
      var positions = this.state.end_positions[rock_number - 1];
      document.getElementById(rockString).style.top = positions[0] + "rem";
      document.getElementById(rockString).style.left = positions[1] + "rem";

      if ("vibrate" in navigator) {
        navigator.vibrate(400);
      }
    }

    checkBrushDone(){
      const getRocksClicked = this.state.rocks_clicked.filter(Boolean).length;
      if(getRocksClicked >= 4){
        this.state.interaction_state = "wash";
        this.updateVisuals();
      }
    }

    bucketClick(){
      document.getElementById("wash_animation").classList.remove("polish__wash--before");
      document.getElementById("wash_animation").classList.add("polish__wash--after");
      this.state.wash_sound.play();
      this.state.interaction_state = "polish"
      this.updateVisuals();
      if ("vibrate" in navigator) {
        navigator.vibrate(1000);
      }
    }

    polishGeode(){
      if(this.state.interaction_state == "polish"){
        this.state.move_count++;

        document.getElementById("percent_text").innerHTML = Math.round(this.state.move_count / this.state.max_move_count * 100) + "%";

        if ("vibrate" in navigator) {
          navigator.vibrate(100);
        }

        if(this.state.can_make_polish_sound){
          this.setState({can_make_polish_sound: false});
          this.state.polish_sound.play()
        }
        if(this.state.polish_sound.ended){
          this.setState({can_make_polish_sound: true});
        }

        if(this.state.move_count >= this.state.max_move_count){
          this.state.interaction_state = "none";
          document.getElementById("action_text").innerHTML = this.state.done_text;
        } else {
          if(this.state.move_count >= (this.state.max_move_count / 5)){
            if(document.getElementById("shimmer1_img").style.visibility != "visible"){
              document.getElementById("shimmer1_img").style.visibility = "visible";
            }
            if(this.state.move_count >= (this.state.max_move_count / 2)){
              if(document.getElementById("shimmer2_img").style.visibility != "visible"){
                document.getElementById("shimmer2_img").style.visibility = "visible";
              }
            }
          }
        }
      }
    }

    render(){
      this.startUp()
        return(
        <article class="polish">
            <button class="polish__button" id="bucket_img" onClick={() => this.bucketClick()}>
                <img class="polish__button__img" src={this.state.bucket_normal_image_path}></img>
            </button>

            <h1 class="polish__text" id="action_text">{this.state.brush_text}</h1>

            <section class="polish__section">
                <figure class="polish__section__figure" onTouchMove={() => this.polishGeode()}>
                    <img class="polish__section__figure__geode" src={this.state.geode_image_path}></img>

                    <img class="polish__section__figure__rock polish__section__figure__rock--1" id="rock1_img" src={this.state.rock1_image_path} style={{top: this.state.start_positions[0][0] + 'rem', left: this.state.start_positions[0][1] + 'rem'}} onClick={() => this.rockClick(1)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--2" id="rock2_img" src={this.state.rock2_image_path} style={{top: this.state.start_positions[1][0] + 'rem', left: this.state.start_positions[1][1] + 'rem'}} onClick={() => this.rockClick(2)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--3" id="rock3_img" src={this.state.rock3_image_path} style={{top: this.state.start_positions[2][0] + 'rem', left: this.state.start_positions[2][1] + 'rem'}} onClick={() => this.rockClick(3)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--4" id="rock4_img" src={this.state.rock4_image_path} style={{top: this.state.start_positions[3][0] + 'rem', left: this.state.start_positions[3][1] + 'rem'}} onClick={() => this.rockClick(4)}></img>

                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--1" id="shimmer1_img" src={this.state.glimmer1_image_path}></img>
                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--2" id="shimmer2_img" src={this.state.glimmer2_image_path}></img>
                </figure>
                <h2 class="polish__section__percent" id="percent_text">0%</h2>
            </section>

            <div class="polish__moveable polish__moveable--brush" id="brush_img">
                <img class="polish__moveable __img" src={this.state.brush_image_path}></img>
            </div>

            <div class="polish__moveable polish__moveable--cloth" id="cloth_img">
                <img class="polish__moveable __img" src={this.state.cloth_image_path}></img>
            </div>

            <div class="polish__wash polish__wash--before" id="wash_animation">
              <img class="polish__wash__foam" src={this.state.foam_image_path}></img>
            </div>
        </article>
        )
    }
}

export default Polish;
