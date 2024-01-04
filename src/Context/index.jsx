import {useContext, createContext, useState, useEffect} from "react";

import axios from 'axios'

const StateContext = createContext()

StateContextProvider = ()=>{

    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Jaipur')
    const [location, setLocation] = useState('')

  // code for API fetch

  const fetchWeather = async()=>{
    const options = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params:{
            aggregateHours: '24',
            locations: place,
            contentType: 'json',
            unitGroup: 'metric',
            shortColumnNames: 0,

        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY, 
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com',
        }
    }

    try {
        const responce  = await axios.request(options)

        console.log(responce.data)

        const thisData = Object.values(responce.data.locations[0])

        setLocation(thisData.address)
        setValues(thisData.values)
        setWeather(thisData.values[0])
        
    } catch (e) {
        console.log(e);

        alert('This place does not exit')
        
    }
     
  }
}
