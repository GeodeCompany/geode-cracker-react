import React from 'react';
import './Collection.scss';

class Collection extends React.Component{

    state = {
        title: "placeholder",
        title_name_dutch: "placeholder",
        geode_dutch: "placeholder",
        title_name_english: "placeholder",
        geode_english: "placeholder",
        information: "placeholder",
        title_where: "placeholder",
        location: "placeholder",
        
        geode_image_image_path: "placeholder",
        geode_map_image_path: "placeholder"
    }

    updateData (data_JSON, geode) {
        this.state.title_name_dutch = data_JSON.collection.general.title_name_dutch;
        this.state.title_name_english = data_JSON.collection.general.title_name_english;
        this.state.title_where = data_JSON.collection.general.title_where;

        this.state.title = data_JSON.collection[geode].title;
        this.state.geode_dutch = data_JSON.collection[geode].geode_dutch;
        this.state.geode_english = data_JSON.collection[geode].geode_english;
        this.state.information = data_JSON.collection[geode].information;
        this.state.location = data_JSON.collection[geode].location;

        this.state.geode_image_image_path = data_JSON.collection[geode].geode_image_image_path;
        this.state.geode_map_image_path = data_JSON.collection[geode].geode_map_image_path;
    }

    redirect(){
        var url = "https://geode-cracker.web.app/?geode=" + this.props.data_geode;
        window.location.replace(url);
    }


    render(){
        this.updateData(this.props.data_JSON, this.props.data_geode);
        
        return(
          <article class="collection">
            <button class="collection__back" onClick={() => this.redirect()}>{'<'}</button>
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
