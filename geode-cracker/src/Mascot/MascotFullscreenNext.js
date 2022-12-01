import React from 'react';

import MascotCard from "./MascotFullscreenCard"

class MascotFullscreenNext extends React.Component{
    render(){
        return(
          <MascotCard nextButton="true" choiceButton="false" type="next"/>
        )
    }
}

export default MascotFullscreenNext;
