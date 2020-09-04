 import React, { useState, useEffect } from 'react'
 import { Text, ImageBackground, StyleSheet } from 'react-native'
 import Forecast from './Forecast'
import { blurTextInput } from 'react-native/Libraries/Components/TextInput/TextInputState'

 export default function Weather(props){
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=5e1bf012e4a7b708a70a2af72d67a1dc`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, [props.zipCode])
       
     const [forecastInfo, setForecastInfo] = useState({
         main: '-',
         description: '-',
         temp: 0
     })

     return (
         <ImageBackground source={require('../GM.jpg')} style={styles.backdrop}>
             <Text>Zip Code</Text>
             <Text>{props.zipCode}</Text>
             <Forecast {...forecastInfo}/>
         </ImageBackground>    
     )
 }

    const styles = StyleSheet.create({
        backdrop: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ff00ff',
            width: '100%',
            height: '70%'
        }
    })