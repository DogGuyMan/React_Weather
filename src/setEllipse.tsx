import React from 'react';
import './SCSS/Ellipse.scss';

type ObjType = {
    classes : Array<string>
}
interface Options {
    [key: string]: ObjType;
}

const weatherCasesE : Options = {
    Loading : {
        classes : ["Ellipse", "LoadingE"],
    }, 
    Clear : {
        classes : ["Ellipse", "ClearE"],
    },
    Thunderstorm : {
        classes : ["Ellipse", "ThunderstormE"],
    },
    Rain : {
        classes : ["Ellipse", "RainE"],
    },
    Clouds : {
        classes : ["Ellipse", "CloudsE"],
    },
    Snow : {
        classes : ["Ellipse", "SnowE"],
    }
}

function Ellipse({name} : {name:string}) {
    return (
        <div className={weatherCasesE[name]?.classes.join(" ")} style={{}}>
            <div className="blue"></div>          
            <div className="gray"></div>          
        </div>
    );
}

export default Ellipse;