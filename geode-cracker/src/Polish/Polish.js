import React from 'react';
import './Polish.scss';

class Polish extends React.Component{

    state = {
        action_text: "Borstel de stukken los",

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

    render(){
        return(
        <article class="polish">
            <button class="polish__button">
                <img class="polish__button__img" src={this.state.bucket_normal_image_path}></img>
            </button>

            <h1 class="polish__text">{this.state.action_text}</h1>

            <section class="polish__section">
                <figure class="polish__section__figure">
                    <img class="polish__section__figure__geode" src={this.state.geode_image_path}></img>

                    <img class="polish__section__figure__rock polish__section__figure__rock--1" src={this.state.rock1_image_path}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--2" src={this.state.rock2_image_path}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--3" src={this.state.rock3_image_path}></img>
                    <img class="polish__section__figure__rock polish__section__figure__rock--4" src={this.state.rock4_image_path}></img>

                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--1" src={this.state.glimmer1_image_path}></img>
                    <img class="polish__section__figure__glimmer polish__section__figure__glimmer--2" src={this.state.glimmer2_image_path}></img>
                </figure>
            </section>

            <div class="polish__moveable polish__moveable--brush">
                <img class="polish__moveable __img" src={this.state.brush_image_path}></img>
            </div>

            <div class="polish__moveable polish__moveable--cloth">
                <img class="polish__moveable __img" src={this.state.cloth_image_path}></img>
            </div>
        </article>
        )
    }
}

export default Polish;
