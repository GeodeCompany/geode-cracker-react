import React from 'react';

import MascotCard from "./MascotFullscreenCard"

class MascotFullscreenChoice extends React.Component{
    render(){
        return(
          <MascotCard nextButton="false" choiceButton="true" type="choice"/>
        )
    }
}

export default MascotFullscreenChoice;
