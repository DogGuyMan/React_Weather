import React from "react";
import './SCSS/Weather.scss';
import path from "path"
import Clock from "react-live-clock"

import _Icon from "./img/rns-weather-icons/SVG/weather_icons-01.svg"
import _Clear from "./img/sun.png"
import _Clouds from "./img/cloud.png"
import _Thunderstorm from "./img/sun_light.png"
import _Rain from "./img/sun_rain.png"
import _Snow from "./img/snow.png"

import Background from './setBackground';
import Ellipse from './setEllipse';

type ObjType = {
    color: Array<string>
    title: string
    subtitle: string
    img : string;
}
interface Options {
    [key: string]: ObjType;
}

const weatherCases : Options = {
    Clear : {
        color :[""],
        title :"Clear Day",
        subtitle : "Have a nice day",
        img : _Clear,
    },
    Thunderstorm : {
        color :[""],
        title :"Thunderstorm",
        subtitle : "Don't forget the umbrella",
        img : _Thunderstorm,
    },
    Rain : {
        color:[""],
        title:"Raining",
        subtitle:"Don't forget the umbrella",
        img : _Rain,
    },
    Clouds : {
        color :[""],
        title:'Cloudy Day',
        subtitle:"Have a nice day",
        img : _Clouds,
    },
    Snow : {
        color :[""],
        title:'it snows',
        subtitle:"Have a nice day",
        img : _Snow,
    }
}

function Weather({temperature, name, curLocation} : {temperature : number, name : string, curLocation : string}) {
    //style={{display : "none"}
    return (
        <section className="Weather">
            <Background name={name}/>
            <Ellipse name={name}/>
            <Clock className="time" format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"} />
            <div className="content">
                <img src={weatherCases[name]?.img}></img>
                <div className="textContent">
                    <p className="title">{weatherCases[name]?.title}</p>
                    <p className="temp">{temperature}˚</p>
                    <p className="location">{curLocation}</p>
                    <p className="subtitle">{weatherCases[name]?.subtitle}</p>
                </div>
            </div>
        </section>
    );
}

export default Weather;
