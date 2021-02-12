import React from 'react';
import "./style.css"

const CityWeather = ({ cityWeather}) => {
    let { humidity, temp, temp_max, temp_min } = cityWeather;

    if(temp != null && temp_max != null){
        temp -= 273;
        temp = (temp).toFixed(2);
        temp_max -= 273;
        temp_max = (temp_max).toFixed(2);
        temp_min -= 271;
        temp_min = (temp_min).toFixed(2);
    }
    if(temp != null)
        return (
            <>
                <div>
                    Humidty: {humidity}
                </div>
                <div>
                    Temperature: {temp} °C
                </div>
                <div>
                    Max Temperature: {temp_max} °C
                </div>
                <div>
                    Min Temperature: {temp_min} °C
                </div>
            </>
        );
    else{
        return (
            <div></div>
        )
    }
    };

    export default CityWeather;