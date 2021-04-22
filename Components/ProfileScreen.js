import React, { Component } from 'react';
import {Keyboard, Image, View, Text, TouchableWithoutFeedback, KeyboardAvoidingView} from 'react-native';
import Styles from './styles/Styles';
import Header from './Header';

    

      export default class ProfileScreen extends Component {
        render() {
          return (
            <>
              <Header/>
              <KeyboardAvoidingView style={Styles.containerView} behavior="padding">
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={Styles.cardContainer}>
                    <View>
                      <Image style={Styles.userImage} source={require('../assets/user.jpg')}/>
                    </View>
                    <View>
                      <Text style={Styles.cardContentName}>Paul</Text>
                    </View>
                    <View>
                      <Text style={Styles.cardContentOccupation}>Influencer/Teacher/Healer/Adventurer</Text>
                    </View>
                    <View style={Styles.bottomBorder}>
                      <Text style={Styles.cardContentHome}>Andromeda Galaxy</Text>
                    </View>
                    <View>
                      <Text style={Styles.cardContentBio}>For the last 60 years, I've lived in a secluded region in New Mexico. I have an ecclectic background, including experience as a pop culture influencer, miraculous healer, and bomb disseminator of universal knowledge and mysteries. But the main thing, I'm just a chill dude in search of my ride back home.  </Text>
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
          this.props.navigation.navigate('Profiles');

        }
      }

