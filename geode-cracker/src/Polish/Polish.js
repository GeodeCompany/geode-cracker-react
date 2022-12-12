import React from 'react';
import './Polish.scss';

class Polish extends React.Component{

    state = {
        action_text: "Borstel de stukken los",

        visibilityBucket: "hidden",
        visibilityCloth: "hidden",
        visibilityBrush: "show",
        visibilityRock: "show",
        visibilityShimmer1: "hidden",
        visibilityShimmer2: "hidden",

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

    interactionState = "brush";
    rocksClicked = [false, false, false, false]

    updateVisuals(state){
      switch (state) {
        case "wash":
          this.state.visibilityBrush = "hidden";
          this.state.visibilityBucket = "show";
          break;
        case "polish":
          this.state.visibilityBucket = "hidden";
          this.state.visibilityCloth = "show";
          break;
      }
    }


    rockClick(rock){
      if(this.rocksClicked[rock - 1] == false){
        this.rocksClicked[rock - 1] = true;
        this.moveRock(rock);
        this.checkBrushDone();
      }
    }

    moveRock(rock){
      switch (rock) {
        case 1:
          document.getElementById("rock1").style.top = "26rem";
          document.getElementById("rock1").style.right = "15rem";
          break;
        case 2:
          document.getElementById("rock2").style.bottom = "4rem";
          document.getElementById("rock2").style.right = "7rem";
          break;
        case 3:
          document.getElementById("rock3").style.bottom = "1 rem";
          document.getElementById("rock3").style.left = "6rem";
          break;
        case 4:
          document.getElementById("rock4").style.top = "20rem";
          document.getElementById("rock4").style.left = "15rem";
          break;
      }
    }

    checkBrushDone(){
      const getRocksClicked = this.rocksClicked.filter(Boolean).length;
      if(getRocksClicked >= 4){
        console.log("YOU DONE");
      }
    }

    render(){
        this.updateVisuals(this.interactionState);

        return(
        <article class="polish">
            <button class="polish__button" style={{visibility: this.state.visibilityBucket}}>
                <img class="polish__button__img" src={this.state.bucket_normal_image_path}></img>
            </button>

            <h1 class="polish__text">{this.state.action_text}</h1>

            <section class="polish__section">
                <figure class="polish__section__figure">
                    <img class="polish__section__figure__geode" src={this.state.geode_image_path}></img>

                    <img class="polish__section__figure__rock polish__section__figure__rock--1" id="rock1" src={this.state.rock1_image_path} onClick={() => this.rockClick(1)} style={{visibility: this.state.visibilityRock}}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--2" id="rock2" src={this.state.rock2_image_path} onClick={() => this.rockClick(2)} style={{visibility: this.state.visibilityRock}}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--3" id="rock3" src={this.state.rock3_image_path} onClick={() => this.rockClick(3)} style={{visibility: this.state.visibilityRock}}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--4" id="rock4" src={this.state.rock4_image_path} onClick={() => this.rockClick(4)} style={{visibility: this.state.visibilityRock}}></img>

                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--1" src={this.state.glimmer1_image_path} style={{visibility: this.state.visibilityShimmer1}}></img>
                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--2" src={this.state.glimmer2_image_path} style={{visibility: this.state.visibilityShimmer2}}></img>
                </figure>
            </section>

            <div class="polish__moveable polish__moveable--brush" style={{visibility: this.state.visibilityBrush}}>
                <img class="polish__moveable __img" src={this.state.brush_image_path}></img>
            </div>

            <div class="polish__moveable polish__moveable--cloth" style={{visibility: this.state.visibilityCloth}}>
                <img class="polish__moveable __img" src={this.state.cloth_image_path}></img>
            </div>
        </article>
        )
    }
}

export default Polish;
