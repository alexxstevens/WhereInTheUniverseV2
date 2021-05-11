import React, {Component} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Tabs from "./Components/index";
import LoginScreen from './Components/LoginScreen';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import SignUpScreen from './Components/SignUpScreen';
import { createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';




export default class App extends Component {
  state = {users: [{
    name: "Paul",
    occupation: "Influencer/Teacher/Healer/Adventurer",
    home: "Andromeda Galaxy",
    bio: "For the last 60 years, I've lived in a secluded region in New Mexico. I have an ecclectic background, including experience as a pop culture influencer, miraculous healer, and bomb disseminator of universal knowledge and mysteries. But the main thing, I'm just a chill dude in search of my ride back home.",
  }]};

  addUser = (user) => {
    const users = this.state.users
    users.push(newUser);
    this.setState({users});
  };

  render() {
  return (
 // <AppContainer />
    <Tabs screenProps = {{
      users: this.state.users, 
    }} />
  );
}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
},{
        initialRouteName: "Home"
});