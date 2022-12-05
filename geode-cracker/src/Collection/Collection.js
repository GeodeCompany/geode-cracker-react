import React from 'react';
import './Collection.scss';

class Collection extends React.Component{

    state = {
        title: "Amethist",
        title_name_dutch: "Nederlandse naam",
        geode_dutch: "Amethist",
        title_name_english: "Engelse naam",
        geode_english:"Amethyst",
        information: "Kwarts is één van de meest voorkomende mineralen in de aardkorst. Vaak zit het als kleine kleurloze of witte korrels opgesloten in gesteenten of komt het voor in grind en zand. Soms groeit kwarts in holle ruimten uit tot grotere doorzichtige kristallen. Als deze kristallen paars gekleurd zijn, worden ze amethist genoemd. Uit amethist-kristallen slijpt men stenen die in sieraden worden gebruikt. Omdat amethist vrij veel wordt gevonden, is het niet zo duur als bijvoorbeeld diamant of robijn.",
        title_where:"Waar",
        location: "Brazilië, Uruguay, Mexico, Namibië, Zambia, Noord-Amerika, Europa, Australië en Japan",
        
        geode_image_image_path: "/img/geode_image_amethyst.png",
        geode_map_image_path: "/img/geode_map_amethyst.png"
    }

    render(){
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
