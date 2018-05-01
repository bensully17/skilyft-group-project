import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground} from 'react-native'
import image from '../../Assets/mountains.png'
import startDatePicker from '../Navigation/DatePickerIOS/DatePicker'
import startNewAccount from '../Navigation/StartCreateAccount/startCreateAccount'

class AuthScreen extends Component {
  loginHandler = () => {
    this.props.navigator.push({
      screen: 'skilyft.PlanTripIOS',
      backButtonHidden: false,
      backButtonTitle: 'Login'
    })  }
  newAccountHandler = () => {
    this.props.navigator.push({
      screen: 'skilyft.CreateAccountScreen',
      animationType: 'fade',
      backButtonHidden: false,
      backButtonTitle: 'Login'
    })
  }
  render () {
    return (   
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.textHeading}>Login to SkiLyft!</Text>
            <Button title='Create New Account' onPress={this.newAccountHandler}></Button>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Username' style={styles.input} underlineColorAndroid='transparent'/>
              <TextInput placeholder='Password' secureTextEntry style={styles.input} underlineColorAndroid='transparent'/>
            </View>
            <Button title='Submit' onPress={this.loginHandler}></Button>
        </View>
      </ImageBackground> 
    )
  }
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    width: '100%'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderColor: '#bbb',
    padding: 5,
    margin: 8,
    borderRadius: 4
  },
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: '30%'
  },
  image: {
    flex: 1,
    alignItems: 'center'
  }
})

export default AuthScreen