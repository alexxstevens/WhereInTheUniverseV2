import React, { Component } from 'react';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, TouchableHighlight, Button, KeyboardAvoidingView} from 'react-native';
import Styles from './styles/Styles';
import Header from './Header';
import uuidV$ from 'uuid/v4';


      

      export default class SignUpScreen extends Component {
        state = {
          name: "", 
          occupation: "", 
          home: "", 
          bio: "",
         };

         onChangeText = (key, value) => {
           this.setState({[key]: value})
         }

         submit = () => {
           if(this.state.name === "" || this.state.occupation ==="" || this.state.home ===""|| this.state.bio ==="") {
              alert("Please complete all items in form.");
              const user = {
                name: this.state.name,
                occupation: this.state.occupation,
                home: this.state.home,
                bio: this.state.bio,
                id: uuidV4(),
              };
              this.props.screenProps.addCity(city);
              this.setState({name: "", occupation: "", home: "", bio: "",}, () => this.props.navigateion.navigate('Users')
              );
           }
         }
        render() {
          return (
            <>
              <Header/>
              <KeyboardAvoidingView style={Styles.containerView} behavior="padding">
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={Styles.loginScreenContainer}>
                  <View style={Styles.loginFormView}>
                  <Text style={Styles.logoText}>Add User</Text>
                    <TextInput placeholder="Name" placeholderColor="#c4c3cb" style={Styles.loginFormTextInput} onChangeText={(val = this.onChangeText("name", val))} />
                    <TextInput placeholder="Occupation" placeholderColor="#c4c3cb" style={Styles.loginFormTextInput} onChangeText={(val = this.onChangeText("occupation", val))} />
                    <TextInput placeholder="Home" placeholderColor="#c4c3cb" style={Styles.loginFormTextInput} onChangeText={(val = this.onChangeText("home", val))} />
                    <TextInput placeholder="Bio" placeholderColor="#c4c3cb" style={Styles.loginFormTextInput} onChangeText={(val = this.onChangeText("bio", val))} />
                    <TouchableHighlight 
                        style = {Styles.highlight}  
                        onPress={this.submit}>
                      <Button
                        style={Styles.loginButton}
                        title="Add User"
                      />
                    </TouchableHighlight>
                  </View>
                </View>
              </TouchableWithoutFeedback>
              </KeyboardAvoidingView>
            </>
          );
        }
      }


      //derived from code at instamobile