import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Forecast from './Forecast';
export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    forecast: {
    main: 'main', description: 'description', temp: 0
    }
    }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
         .then((response) => response.json())
         .then((json) => {
           this.setState(
            {
               forecast: {
                 main: json.weather[0].main,
                 description: json.weather[0].description,
                 temp: json.main.temp
               }
            });
        })
         .catch((error) => {
            console.warn(error);
         });
        }
        componentDidMount = () => this.fetchData()

        componentDidUpdate = (prevProps) => {
            if(prevProps.zipCode !== this.props.zipCode){
              this.fetchData()
            }
          }

    render() {
        return (
        <View style={styles.container}>
        
        <ImageBackground source={require('../GM.jpg')} style={styles.backdrop}>
        
        
        <View style={styles.layout }>
       
         <Text    style={styles.red } > Zip code is {this.props.zipCode}.</Text>
         <Forecast {...this.state.forecast} />
        </View>
        </ImageBackground>
       
      </View>
        );
        }
       }
   const styles = StyleSheet.create({
    container: { 
        paddingTop: 25, 
        
     },
     layout: {
      
        flexDirection:'column',
        alignItems: 'center',
       
        justifyContent:'space-between',
        height: 300,  opacity: 0.4, 
        backgroundColor: 'black',
        fontSize: 50,
      
     },
    red : {
      
        paddingTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        
    },
    backdrop: { width: '100%', 
    height: '100%',
  
   },
   });