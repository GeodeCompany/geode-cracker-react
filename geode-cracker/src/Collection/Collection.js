import React from 'react';
import './Collection.scss';

import data_NL from '../data_NL.json';
import data_EN from '../data_EN.json';

class Collection extends React.Component{

    state = {
        title: data_NL.collection.amethyst.title,
        title_name_dutch: data_NL.collection.general.title_name_dutch,
        geode_dutch: data_NL.collection.amethyst.geode_dutch,
        title_name_english: data_NL.collection.general.title_name_english,
        geode_english: data_NL.collection.amethyst.geode_english,
        information: data_NL.collection.amethyst.information,
        title_where: data_NL.collection.general.title_where,
        location: data_NL.collection.amethyst.location,
        
        geode_image_image_path: "/img/geode_image_amethyst.png",
        geode_map_image_path: "/img/geode_map_amethyst.png"
    }

    updateData (language, geode) {
        var data;

        switch (language) {
            case "NL":
                data = data_NL.collection;
                break;

            case "EN":
                data = data_EN.collection;
                break;
        };

        this.state.title_name_dutch = data.general.title_name_dutch;
        this.state.title_name_english = data.general.title_name_english;
        this.state.title_where = data.general.title_where;

        for (let rock in data) {
            if (rock == geode) {
                this.state.title = data[rock].title;
                this.state.geode_dutch = data[rock].geode_dutch;
                this.state.geode_english = data[rock].geode_english;
                this.state.information = data[rock].information;
                this.state.location = data[rock].location;
            }
        }
    }
    


    render(){

        this.updateData ("NL", "amethyst");
        
        return(
          <article class="collection">
            <section class="collection__information">
                <figure class="collection__information__figure">
                    <img class="collection__information__figure__image" src={this.state.geode_image_image_path}></img>
                </figure>
                <h1 class="collection__information__title">{this.state.title}</h1>
                <h3 class="collection__information__naming">{this.state.title_name_dutch}</h3>
                <p class="collection__information__name">{this.state.geode_dutch}</p>
                <h3 class="collection__information__naming">{this.state.title_name_english}</h3>
                <p class="collection__information__name">{this.state.geode_english}</p>
                <p class="collection__information__paragraph">{this.state.information}</p>
            </section>
            <section class="collection__where">
                <h2 class="collection__where__title">{this.state.title_where}</h2>
                <figure class="collection__where__figure">
                    <img class="collection__where__figure__image" src={this.state.geode_map_image_path}></img>
                </figure>
                <p class="collection__where__location">{this.state.location}</p>
            </section>
          </article>
        )
    }
}

export default Collection;
