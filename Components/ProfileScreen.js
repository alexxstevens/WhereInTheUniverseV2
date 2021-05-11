import React, { Component } from 'react';
import {Keyboard, Image, View, Text, TouchableWithoutFeedback, ScrollView, useColorScheme} from 'react-native';
import Styles from './styles/Styles';
import Header from './Header';
import CenterMessage from './CenterMessage';

    

      export default class ProfileScreen extends Component {
        render() {
          return (
            <>
              <Header/>
              <ScrollView style={Styles.containerView} behavior="padding">
                <View>
                  {!users.length && <CenterMessage message="No current users"/>}
                  {Users.map((item, index) => (
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                      <View style={Styles.cardContainer}>
                        <View>
                          <Image style={Styles.userImage} source={require('../assets/user.jpg')}/>
                        </View>
                        <View>
                          <Text style={Styles.cardContentName}>{item.name}</Text>
                        </View>
                        <View>
                          <Text style={Styles.cardContentOccupation}>{item.occupation}</Text>
                        </View>
                        <View style={Styles.bottomBorder}>
                          <Text style={Styles.cardContentHome}>{item.home}</Text>
                        </View>
                        <View>
                          <Text style={Styles.cardContentBio}>{item.bio}</Text>
                        </View>
                      </View>
                  </TouchableWithoutFeedback>
                  ))};
                </View>
              </ScrollView>
            </>
          );
      }
    }

