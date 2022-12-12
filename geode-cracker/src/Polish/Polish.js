import React from 'react';
import './Polish.scss';

class Polish extends React.Component{

    state = {
        brush_text: "Borstel de stukken los",
        wash_text: "Spoel de stukken weg",
        polish_text: "Poets de geode schoon",

        start_positions: [[1.5, 22],[2.5, 4.5],[26, 24],[26, 0]],
        end_positions: [[27, 15],[28, 7],[23, 20],[21, 11]],

        interactionState: "brush",
        rocksClicked: [false, false, false, false],

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
        glimmer2_image_path: "/img/glimmers2.png"
    }

    updateVisuals(){
      switch (this.state.interactionState) {
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
          break;
      }
    }

    rockClick(rock_number){
      if(this.state.rocksClicked[rock_number - 1] == false){
        this.state.rocksClicked[rock_number - 1] = true;
        this.moveRock(rock_number);
        this.checkBrushDone();
      }
    }

    moveRock(rock_number){
      var rockString = "rock" + rock_number + "_img";
      var positions = this.state.end_positions[rock_number - 1];
      document.getElementById(rockString).style.top = positions[0] + "rem";
      document.getElementById(rockString).style.left = positions[1] + "rem";
    }

    checkBrushDone(){
      const getRocksClicked = this.state.rocksClicked.filter(Boolean).length;
      if(getRocksClicked >= 4){
        this.state.interactionState = "wash";
        console.log(this.state.interactionState)
        this.updateVisuals();
      }
    }

    bucketClick(){
      console.log("CLICKED DA BUCKET");


      this.state.interactionState = "polish"
      this.updateVisuals();
    }

    render(){
        return(
        <article class="polish">
            <button class="polish__button" id="bucket_img" onClick={() => this.bucketClick()}>
                <img class="polish__button__img" src={this.state.bucket_normal_image_path}></img>
            </button>

            <h1 class="polish__text" id="action_text">{this.state.brush_text}</h1>

            <section class="polish__section">
                <figure class="polish__section__figure">
                    <img class="polish__section__figure__geode" src={this.state.geode_image_path}></img>

                    <img class="polish__section__figure__rock polish__section__figure__rock--1" id="rock1_img" src={this.state.rock1_image_path} style={{top: this.state.start_positions[0][0] + 'rem', left: this.state.start_positions[0][1] + 'rem'}} onClick={() => this.rockClick(1)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--2" id="rock2_img" src={this.state.rock2_image_path} style={{top: this.state.start_positions[1][0] + 'rem', left: this.state.start_positions[1][1] + 'rem'}} onClick={() => this.rockClick(2)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--3" id="rock3_img" src={this.state.rock3_image_path} style={{top: this.state.start_positions[2][0] + 'rem', left: this.state.start_positions[2][1] + 'rem'}} onClick={() => this.rockClick(3)}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--4" id="rock4_img" src={this.state.rock4_image_path} style={{top: this.state.start_positions[3][0] + 'rem', left: this.state.start_positions[3][1] + 'rem'}} onClick={() => this.rockClick(4)}></img>

                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--1" id="shimmer1" src={this.state.glimmer1_image_path}></img>
                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--2" id="shimmer2" src={this.state.glimmer2_image_path}></img>
                </figure>
            </section>

            <div class="polish__moveable polish__moveable--brush" id="brush_img">
                <img class="polish__moveable __img" src={this.state.brush_image_path}></img>
            </div>

            <div class="polish__moveable polish__moveable--cloth" id="cloth_img">
                <img class="polish__moveable __img" src={this.state.cloth_image_path}></img>
            </div>
        </article>
        )
    }
}

export default Polish;
