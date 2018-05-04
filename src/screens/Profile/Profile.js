import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import PickImage from '../../components/PickImage/PickImage'

class Profile extends Component {
  state = {
    selectedImage: null,
    name: '',
    vehicle: ''
  }
  saveProfile = () => {
    fetch('https://us-central1-skilyft.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: this.state.selectedImage.base64
      })
    })
    .catch(err => console.error(err))
    .then(res => res.json())
    .then(parsedRes => console.log(parsedRes))
    .then(
      this.props.navigator.push({
        screen: 'skilyft.PlanTripIOS',
        title: 'Plan Your Trip',
        backButtonHidden: true
      })
    )
    
  }
 
  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: 'Select an Image'}, res => {
      if (res.didCancel) {console.log('User Cancelled')}
      else if (res.error) {
        console.log('Error', res.error)
      }
      else {
        this.setState({
          selectedImage: { uri: res.uri, base64: res.data }
        })
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.pickImage}>
          <PickImage style={styles.pickImage} selectImage={this.pickImageHandler} selectedImage={this.state.selectedImage}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Full Name' onChange={val => this.setState({name: val})}/>
          <TextInput style={styles.textInput} placeholder='Vehicle Year, Make, and Model' onChange={val => this.setState({vehicle: val})}/>
        </View>
        <View style={styles.saveButton}>
          <Button title='Save' onPress={this.saveProfile}/>
        </View>
      </View>
    )    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderColor: '#bbb',
    padding: 5,
    margin: 8
  },
  inputContainer: {
    flex: 2,
    width: '80%',
    paddingBottom: '5%'
  },
  pickImage: {
    flex: 6,
    width: '80%',
    marginTop: '5%',
    borderRadius: 4
  },
  saveButton: {
    flex: 1
  }
})
export default Profile