import React from "react";
import './SCSS/Weather.scss';
import path from "path"
import Icon from "./img/rns-weather-icons/SVG/weather_icons-01.svg"

type ObjType = {
    color: Array<string>
    title: string
    subtitle: string
}
interface Options {
    [key: string]: ObjType;
}


const weatherCases : Options = {
    Rains : {
        color:["#A00"],
        title:"Raining",
        subtitle:"우산챙겨가",
    },
    Clouds : {
        color :["#666"],
        title:'Cloudy',
        subtitle:"good Day"
    }
}

function Weather({temperature, name} : {temperature : number, name : string}) {
    //style={{display : "none"}
    return (
    <div className="Weather">
            <div className="content">
                <div className="emptySpace"></div>
                <div className="mid">
                    <img src={Icon} alt="logo"></img>
                    <div>{temperature}˚</div>
                    <p>{name}</p>
                </div>
                <div className="emptySpace"></div>
                <div className="low">
                    <p>{weatherCases[name]?.title}</p>
                    <p>{weatherCases[name]?.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

export default Weather;