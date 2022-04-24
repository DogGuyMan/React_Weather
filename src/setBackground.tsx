import React from 'react';
import './SCSS/Background.scss';

type ObjType = {
    classes : Array<string>
}
interface Options {
    [key: string]: ObjType;
}

const weatherCasesBG : Options = {
    Loading : {
        classes : ["background", "LoadingBG"],
    }, 
    Clear : {
        classes : ["background", "ClearBG"],
    },
    Thunderstorm : {
        classes : ["background", "ThunderstormBG"],
    },
    Rain : {
        classes : ["background", "RainBG"],
    },
    Clouds : {
        classes : ["background", "CloudsBG"],
    },
    Snow : {
        classes : ["background", "SnowBG"],
    }
}

function Background({name} : {name:string}) {
    return (
        <div className={weatherCasesBG[name]?.classes.join(" ")} style={{}}>
            <div className="night"></div>
            <div className="hazy"></div>
            <div className="day"></div>
        </div>
    );
}

export default Background;