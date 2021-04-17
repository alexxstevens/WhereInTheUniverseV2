import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import Styles from './styles/Styles';
import Header from './Header';
import Accordian from './Accordian';
import AppSearchBar from './AppSearchBar';
import HomePlanetBar from './HomePlanetBar';


        // 
        // <View style={Styles.container}>
          
        // </View>

export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: '11 Com',
          key: 1, 
          data: 'Stellar Mass: xx    Stellar Radius: xx      Stellar Effective Temp: xx      Distance: xx(from Earth)    11 Com Stars: xxxx    11 Com Planets: xxxx',
        },
        { 
          title: '11 UMi',
          key: 2,
          data: 'Stellar Mass: xx    Stellar Radius: xx      Stellar Effective Temp: xx      Distance: xx(from Earth)    11 UMi Stars: xxxx    11 UMi Planets: xxxx',
        },
        { 
          title: '14 Her',
          key: 3,
          data: 'Stellar Mass: xx    Stellar Radius: xx      Stellar Effective Temp: xx      Distance: xx(from Earth)    14 Her Stars: xxxx    14 Her Planets: xxxx',
        },
        { 
          title: '16 Cyg',
          key: 4,
          data: 'Stellar Mass: xx    Stellar Radius: xx      Stellar Effective Temp: xx      Distance: xx(from Earth)    16 Cyg Stars: xxxx    16 Cyg Planets: xxxx',
        },
      ],
      home :[
        {
          planetName: 'Earth',
          planetMass: 'xx',
          planetRadius: 'xx',
          orbitalYear: 'xx',
        },
      ],
     }
  }
  render() {
    return (
      <View style={Styles.homeContainer}>
        <Header/>
        <Image
            style={Styles.blockImage}
            source={require('../assets/solarSystem.jpg')}
        />
        <HomePlanetBar/>
        <AppSearchBar/>
        <Text style={Styles.homeHeading}>Stellar Host</Text>
        { this.renderAccordians() }
      </View>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:100,
   backgroundColor: 'white',
   
  }
});