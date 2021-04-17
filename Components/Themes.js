import React, {Component} from 'react';
import {Button, View} from "react-native";
import getStyleSheet from './styles/ThemeStyles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Theme: "LightTheme"};
    console.log(this.state);
  }
  toggleTheme(){
    var theTheme;
    theTheme = this.state;
    getStyleSheet(theTheme);
    }
  render(){
    const styles = getStyleSheet(this.state.Theme);
  return(
    <>
    <View style={styles.container}>
      <View style={styles.box}>
        <Button color="#715aa9" title="dark" onPress={() => {this.setState({Theme: "DarkTheme"}); console.log(this.state);}} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.box}>
        <Button color="#999966"  title="patty" onPress={() => {this.setState({Theme: "PattyTheme"}); console.log(this.state);}} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.box}>
        <Button color="#5d48b4"  title="halloween" onPress={() => {this.setState({Theme: "HalloweenTheme"}); console.log(this.state);}} />   
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.box}>
        <Button color="#ff0000"  title="sunshine" onPress={() => {this.setState({Theme: "SunshineTheme"}); console.log(this.state);}} />  
      </View>
    </View>
    </>
  )
  }};
