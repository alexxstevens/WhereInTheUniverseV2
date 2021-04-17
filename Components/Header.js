import React, {Component} from 'react';
import {View, Text, Image} from "react-native";
import Styles from './styles/Styles';


export default class App extends Component {
    render(){
    const styles = Styles;
    return(
      <View style={styles.header}>
        <Image
        style={styles.tinyLogo}
        source={require('../assets/saturn.png')}
      />
        <Text style={styles.headerText}> Where in the Universe?</Text>
      </View>
    )
    }};
