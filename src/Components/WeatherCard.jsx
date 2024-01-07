import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from '../assets/icons/sun.png'
import Cloud from '../assets/icons/cloud.png'
import Fog from '../assets/icons/fog.png'
import Rain from '../assets/icons/heavy-rain.png'
import Snow from '../assets/icons/snowy.png'
import Strom from '../assets/icons/thunderstrom.png'
import Wind from '../assets/icons/wind.png'
import '../index.css'
function WeatherCard({
    temperature,
    windspeed,
    humidity,
    place,
    heatIndex,
    iconString,
    conditions
}){
    
    const [icon, setIcon] = useState(sun)
    const {time} = useDate()
    useEffect(() =>{

        if(iconString){
            if(iconString.toLowerCase().includes('cloud')){
                setIcon(Cloud)
            }else if(iconString.toLowerCase().includes('rain')){
                setIcon(Rain)
            }else if(iconString.toLowerCase().includes('sun')){
                setIcon(sun)
            }else if(iconString.toLowerCase().includes('fog')){
                setIcon(Fog)
            }else if(iconString.toLowerCase().includes('snow')){
                setIcon(Snow)
            }else if(iconString.toLowerCase().includes('strom')){
                setIcon(Strom)
            }else if(iconString.toLowerCase().includes('wind')){
                setIcon(Wind)
            }
        }
    })
   
    return (
        <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4">
            <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
                <img src={icon} alt="weather-icon" />
                 <p className="fon-bold text-5xl flex justify-center items-center">{temperature} &deg;C</p>
             </div>
             <div className="font-bold text-center text-xl">
                {place}
             </div>
             <div className="w-full flex justify-between items-center mt-4">
                <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
                <p className="flex-1 text-center p-2">{time}</p> 
             </div>
             <div className="w-full flex justify-between items-center mt-4 gap-4">
                  <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
                    Wind Speed <p className="font-normal">{windspeed}</p>
                  </p>
                  <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">Humidity <p className="font-normal">{humidity}</p></p>
             </div>
             <div className="w-full p-3 mt-4 justify-center items-center">
            <p className="font-semibold text-lg">Heat Index</p>
            <p className="text-lg">{heatIndex ? heatIndex : 'N/A'}</p>
             </div>
             <hr className="bg-slate-600"></hr>
             <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
                {conditions}
             </div>
        </div>
    )

}

export default WeatherCard