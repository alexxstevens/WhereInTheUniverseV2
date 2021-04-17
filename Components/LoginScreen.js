import React, { Component } from 'react';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, TouchableHighlight, Button, KeyboardAvoidingView} from 'react-native';
import Styles from './styles/Styles';
import Header from './Header';

      
      const appId = "1047121222092614";

      export default class LoginScreen extends Component {
        render() {
          return (
            <>
              <Header/>
              <KeyboardAvoidingView style={Styles.containerView} behavior="padding">
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Styles.loginScreenContainer}>
                  <View style={Styles.loginFormView}>
                  <Text style={Styles.logoText}>Login / SignUp</Text>
                    <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={Styles.loginFormTextInput} />
                    <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={Styles.loginFormTextInput} secureTextEntry={true}/>
                    <TouchableHighlight 
                        style = {Styles.highlight}>
                      <Button
                        style={Styles.loginButton}
                        onPress={() => this.onLoginPress()}
                        title="Login"
                      />
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style = {Styles.highlight}>
                      <Button
                        style={Styles.signUpButton}
                        onPress={() => this.onSignUpPress()}
                        title="Sign Up"
                        color="#3897f1"
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </>
          );
        }

        onLoginPress() {
           this.props.navigation.navigate('Home');
        }

       onSignUpPress() {
          this.props.navigation.navigate('Home');

        }
      }


      //derived from code at instamobile