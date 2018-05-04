import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import PickImage from '../../components/PickImage/PickImage'

class Profile extends Component {
  state = {
    selectedImage: null,
    name: '',
    vehicle: '',
    imageLink: ''
  }
  saveProfile = () => {
    fetch('https://us-central1-skilyft.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: this.state.selectedImage.base64
      })
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      this.setState({imageLink: result.imageUrl})
      this.planCarpool() 
    })
    // .then(
    //   this.planCarpool()
    // )
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

  planCarpool = () => {
    // console.log(this.state)
    this.props.navigator.push({
      screen: 'skilyft.PlanTripNew',
      title: 'Plan Your Trip',
      backButtonHidden: true,
      passProps: {
        name: this.state.name,
        vehicle: this.state.vehicle,
        imageUrl: this.state.imageLink
      }
    })
  }
  nameChangeHandler = (event) => {
    console.log(event.nativeEvent.text);
    this.setState({name: event.nativeEvent.text})
  }
  vehicleChange = (event) => {
    this.setState({vehicle: event.nativeEvent.text})
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.pickImage}>
          <PickImage style={styles.pickImage} selectImage={this.pickImageHandler} selectedImage={this.state.selectedImage}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Full Name' onChange={this.nameChangeHandler}/>
          <TextInput style={styles.textInput} placeholder='Vehicle Year, Make, and Model' onChange={this.vehicleChange}/>
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