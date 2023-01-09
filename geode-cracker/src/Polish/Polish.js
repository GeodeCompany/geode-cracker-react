import React from 'react';
import './Polish.scss';
import MascotHelp from '../Mascot/MascotHelp';

const moveActiveObject = (event) => {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  moveItem("cloth_img", x, y);
};

const moveItem = (item, x, y) => {
  document.getElementById(item).style.top = y  - 80 + "px";
  document.getElementById(item).style.left = x - 80 + "px";
}

class Polish extends React.Component{
    state = {
      startup_state: true,
      brush_text: "placeholder",
      wash_text: "placeholder",
      polish_text: "placeholder",
      done_text: "placeholder",

      start_positions: "placeholder",
      end_positions: "placeholder",

      mascot_help_state: "brush",
      mascot_help_text: "placeholder",
      mascot_brush_text: "placeholder",
      mascot_wash_text: "placeholder",
      mascot_polish_text: "placeholder",

      interaction_state: "brush",
      rocks_clicked: [false, false, false, false],
      move_count: 0,
      max_move_count: 100,

      can_make_polish_sound: true,

      geode_image_path: "placeholder",
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

    updateData (data_JSON, geode) {
      this.state.brush_text = data_JSON.clean.brush.title;
      this.state.wash_text = data_JSON.clean.water.title;
      this.state.polish_text = data_JSON.clean.wipe.title;
      this.state.done_text = data_JSON.clean.clean.title;

      this.state.mascot_brush_text = data_JSON.clean.brush.mascot;
      this.state.mascot_wash_text = data_JSON.clean.water.mascot;
      this.state.mascot_polish_text = data_JSON.clean.wipe.mascot;

      this.state.geode_image_path = data_JSON.collection[geode].geode_clean_image_path;
      this.state.rock1_image_path = data_JSON.collection[geode].geode_rock1_image_path;
      this.state.rock2_image_path = data_JSON.collection[geode].geode_rock2_image_path;
      this.state.rock3_image_path = data_JSON.collection[geode].geode_rock3_image_path;
      this.state.rock4_image_path = data_JSON.collection[geode].geode_rock4_image_path;
      this.state.start_positions = data_JSON.collection[geode].geode_clean_start_positions;
      this.state.end_positions = data_JSON.collection[geode].geode_clean_end_positions;
    }

    startUp(){
      this.state.mascot_help_text = this.props.data_JSON.clean.brush.mascot;
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
          this.setState({mascot_help_state: "wash"});
          document.getElementById("action_text").innerHTML = this.state.wash_text;
          document.getElementById("bucket_img").style.visibility = "visible";
          break;
        case "polish":
          this.setState({mascot_help_state: "polish"});
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
        this.animateBrush(rock_number, "brush" + rock_number + "_img");
      }
    }

    animateBrush(rock_number, brush){
      document.getElementById(brush).style.visibility = "visible";
      this.moveBrush(0, rock_number, brush);
      setTimeout(() => this.moveBrush(.5, rock_number, brush),150);
      setTimeout(() => this.moveBrush(-1, rock_number, brush),300);
      setTimeout(() => this.moveBrush(1, rock_number, brush),450);
      setTimeout(() => this.moveBrush(-.5, rock_number, brush),600);
      setTimeout(() => {
        document.getElementById(brush).style.visibility = "hidden";
        this.moveRock(rock_number);
        this.state.rock_sound.play();
        this.checkBrushDone();
      }, 1000);
    }

    moveBrush(amount, rock_number, brush){
      document.getElementById(brush).style.left = this.state.start_positions[rock_number - 1][1] + amount + "rem"
    }

    moveRock(rock_number){
      var rockString = "rock" + rock_number + "_img";
      var positions = this.state.end_positions[rock_number - 1];
      document.getElementById(rockString).style.top = positions[0] + "rem";
      document.getElementById(rockString).style.left = positions[1] + "rem";

      if ("vibrate" in navigator && this.props.settings_vibrations) {
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
      if ("vibrate" in navigator && this.props.settings_vibrations) {
        navigator.vibrate(1000);
      }
      setTimeout(() => {
        this.state.interaction_state = "polish"
        this.updateVisuals();
      }, 1000);
    }

    polishGeode(){
      if(this.state.interaction_state == "polish"){
        this.state.move_count++;

        document.getElementById("percent_text").innerHTML = Math.round(this.state.move_count / this.state.max_move_count * 100) + "%";

        if ("vibrate" in navigator && this.props.settings_vibrations) {
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
          setTimeout(() => {
            this.props.changeContent(this.props.polish_end_content);
          }, 3000);
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
      if(this.state.startup_state){
        this.startUp();
        this.setState({
          startup_state: false,
        })
      }
      this.updateData(this.props.data_JSON, this.props.data_geode);

      return(
        <section>
          {this.state.mascot_help_state === "brush" && <MascotHelp mascot_text={this.state.mascot_brush_text} />}
          {this.state.mascot_help_state === "wash" && <MascotHelp mascot_text={this.state.mascot_wash_text} />}
          {this.state.mascot_help_state === "polish" && <MascotHelp mascot_text={this.state.mascot_polish_text} />}

          <article class="polish">
            <button class="polish__button" id="bucket_img" onClick={() => this.bucketClick()}>
              <img class="polish__button__img" src={this.state.bucket_normal_image_path}></img>
            </button>

            <h1 class="polish__text" id="action_text">{this.state.brush_text}</h1>

            <section class="polish__section">
                <figure class="polish__section__figure" onTouchStart={moveActiveObject} onTouchMove={moveActiveObject}>
                    <img class="polish__section__figure__geode" src={this.state.geode_image_path} onTouchMove={() => this.polishGeode()}></img>

                    <img class="polish__section__figure__rock polish__section__figure__rock--1" id="rock1_img" src={this.state.rock1_image_path} style={{top: this.state.start_positions[0][0] + 'rem', left: this.state.start_positions[0][1] + 'rem'}} onClick={() => this.rockClick(1)} onTouchStart={() => this.rockClick(1)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--2" id="rock2_img" src={this.state.rock2_image_path} style={{top: this.state.start_positions[1][0] + 'rem', left: this.state.start_positions[1][1] + 'rem'}} onClick={() => this.rockClick(2)} onTouchStart={() => this.rockClick(2)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--3" id="rock3_img" src={this.state.rock3_image_path} style={{top: this.state.start_positions[2][0] + 'rem', left: this.state.start_positions[2][1] + 'rem'}} onClick={() => this.rockClick(3)} onTouchStart={() => this.rockClick(3)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--4" id="rock4_img" src={this.state.rock4_image_path} style={{top: this.state.start_positions[3][0] + 'rem', left: this.state.start_positions[3][1] + 'rem'}} onClick={() => this.rockClick(4)} onTouchStart={() => this.rockClick(4)}></img>

                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--1" id="shimmer1_img" src={this.state.glimmer1_image_path}></img>
                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--2" id="shimmer2_img" src={this.state.glimmer2_image_path}></img>

                    <div class="polish__moveable polish__moveable--brush" id="brush1_img" style={{top: this.state.start_positions[0][0] + 'rem', left: this.state.start_positions[0][1] + 'rem'}}>
                        <img class="polish__moveable__img" src={this.state.brush_image_path}></img>
                    </div>
                    <div class="polish__moveable polish__moveable--brush" id="brush2_img" style={{top: this.state.start_positions[1][0] + 'rem', left: this.state.start_positions[1][1] + 'rem'}}>
                        <img class="polish__moveable__img" src={this.state.brush_image_path}></img>
                    </div>
                    <div class="polish__moveable polish__moveable--brush" id="brush3_img" style={{top: this.state.start_positions[2][0] + 'rem', left: this.state.start_positions[2][1] + 'rem'}}>
                        <img class="polish__moveable__img" src={this.state.brush_image_path}></img>
                    </div>
                    <div class="polish__moveable polish__moveable--brush" id="brush4_img" style={{top: this.state.start_positions[3][0] + 'rem', left: this.state.start_positions[3][1] + 'rem'}}>
                        <img class="polish__moveable__img" src={this.state.brush_image_path}></img>
                    </div>

                </figure>
                <h2 class="polish__section__percent" id="percent_text">0%</h2>
            </section>


            <div class="polish__moveable polish__moveable--cloth" id="cloth_img">
                <img class="polish__moveable__img" src={this.state.cloth_image_path}></img>
            </div>

            <div class="polish__wash polish__wash--before" id="wash_animation">
              <img class="polish__wash__foam" src={this.state.foam_image_path}></img>
            </div>
        </article>

      </section>
    )
  }
}

export default Polish;
