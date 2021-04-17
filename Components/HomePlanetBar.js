import React, {Component} from 'react';
import {View, Text, Image} from "react-native";
import Styles from './styles/Styles';


export default class HomePlanetBar extends Component{
  render(){
    return (
      <>
        <View style={Styles.homeBarBorder}>
          <Text style={Styles.homePlanet}>Earth</Text>
        </View>
        <View style={Styles.homeBarBorder}>
          <Text style={Styles.homeStats}>Planet Mass: xx       Planet Radius: xx       Orbital Year: xxxx</Text>
        </View>
      </>
    )
  }
}; 