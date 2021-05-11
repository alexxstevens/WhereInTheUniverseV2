import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SignUpScreen from './SignUpScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//import { createAppContainer } from 'react-navigation';


const options = {
  navigateOptions: {
    headerTintColor: 'orange', },
}


const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Profiles: {
    screen: ProfileScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
}, 
options);

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Users: {
    screen: ProfileScreen
  },
  AddUser: {
    screen: SignUpScreen
  },
  Logout: {
    screen: LoginScreen
  },
});

// const AppContainer = createAppContainer(AppNavigator);

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

export default Tabs;