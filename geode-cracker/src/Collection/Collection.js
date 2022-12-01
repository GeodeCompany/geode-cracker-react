import React from 'react';
import './Collection.css';

import GeodeImage from "../Images/Amethyst.png";
import MapImage from "../Images/Map.png";

class Collection extends React.Component{

    state = {
        title: "Amethist",
        titleNameDutch: "Nederlandse naam",
        geodeDutch: "Amethist",
        titleNameEnglish: "Engelse naam",
        geodeEnglish:"Amethyst",
        information: "Kwarts is één van de meest voorkomende mineralen in de aardkorst. Vaak zit het als kleine kleurloze of witte korrels opgesloten in gesteenten of komt het voor in grind en zand. Soms groeit kwarts in holle ruimten uit tot grotere doorzichtige kristallen. Als deze kristallen paars gekleurd zijn, worden ze amethist genoemd. Uit amethist-kristallen slijpt men stenen die in sieraden worden gebruikt. Omdat amethist vrij veel wordt gevonden, is het niet zo duur als bijvoorbeeld diamant of robijn.",
        titleWhere:"Waar",
        location: "Brazilië, Uruguay, Mexico, Namibië, Zambia, Noord-Amerika, Europa, Australië en Japan"  
    }

    render(){
        return(
          <article class="collection">
            <section class="collection__information">
                <figure class="collection__information__figure">
                    <img class="collection__information__figure__image" src={GeodeImage}></img>
                </figure>
                <h1 class="collection__information__title">{this.state.title}</h1>
                <h3 class="collection__information__naming">{this.state.titleNameDutch}</h3>
                <p class="collection__information__name">{this.state.geodeDutch}</p>
                <h3 class="collection__information__naming">{this.state.titleNameEnglish}</h3>
                <p class="collection__information__name">{this.state.geodeEnglish}</p>
                <p class="collection__information__paragraph">{this.state.information}</p>
            </section>
            <section class="collection__where">
                <h2 class="collection__where__title">{this.state.titleWhere}</h2>
                <figure class="collection__where__figure">
                    <img class="collection__where__figure__image" src={MapImage}></img>
                </figure>
                <p class="collection__where__location">{this.state.location}</p>
            </section>
          </article>
        )
    }
}

export default Collection;
