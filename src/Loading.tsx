import React from 'react';
import loading from "./img/loading.svg";
import Weather from './Weather';
import './SCSS/Loading.scss';
import { render } from '@testing-library/react';

const API_KEY = "4f8b621da6f2c18f3a410eda4f0c73f4";

export default class LoadingView extends React.Component {
    state = {
        isLoaded: false,
        error : null,
        temperature : null,
        name:null
    };

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({isLoaded: true});
                this._getWeather(position.coords.latitude, position.coords.longitude)
            }, 
            error => {
                this.setState({error:"someError"});
            }
        );
    }

    _getWeather= (lat : number, long : number) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                temperature : json.main.temp,
                name : json.weather[0].main,
                isLoaded:true,
            })
        });
    }

    render () {
        const {isLoaded, error, temperature, name} = this.state;
        const errorText = {color : "#0F0",};
        if(isLoaded){
            return (
                <div className='View'>
                    <Weather 
                        temperature = {(temperature === null) ? -999 : ~~(temperature - 273.15)}
                        name = {(name === null) ? "" : name}
                    />
                </div>
            )
        }
        else{
            return ( 
                <div className='View'>
                    <div className='Loading'>
                        {error ? <p  style={errorText}>{error}</p> : <p> getting weather </p>} 
                    </div>
                </div>
            );
        }
    }
}