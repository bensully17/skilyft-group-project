import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground} from 'react-native'
import image from '../../Assets/SkiLyft1.png'
import startMainTabs from '../Navigation/MainTabs/startMainTabs'
import CustomButton from '../../components/CustomButton/CustomButton'

class CreateAccountScreen extends Component {
  loginHandler = () => {
    this.props.navigator.push({
      screen: 'skilyft.ProfileScreen',
      animationType: 'fade',
      backButtonHidden: true
    })
    
  }
  returnHandler = () => {
    this.props.navigator.push({
      screen: 'skilyft.AuthScreen',
      animationType: 'fade',
      backButtonHidden: true
    })
  }
  render () {
    return (   
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.textHeading}>Create new Account</Text>
          <CustomButton title='Return to Login' onPress={this.returnHandler} color={'#efefef'}>Return to Login</CustomButton>
          <View style={styles.inputContainer}>
            <TextInput placeholder='Username' style={styles.input} underlineColorAndroid='transparent'/>
            <TextInput placeholder='Password' style={styles.input} secureTextEntry underlineColorAndroid='transparent'/>
          </View>
          <CustomButton title='Submit' onPress={this.loginHandler} style={styles.input} color={'#efefef'}>Submit</CustomButton>
        </View>
      </ImageBackground> 
    )
  }
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    justifyContent: 'space-around',
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
    borderRadius: 4,
    padding: 5,
    margin: 8
  },
  textHeading: {
    paddingTop: '30%',
    fontSize: 24,
    paddingBottom: '30%'
  },
  image: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#efefef'
  }
})

export default CreateAccountScreen
