import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import PickImage from '../../components/PickImage/PickImage'

class Profile extends Component {
  saveProfile = () => {

  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.pickImage}>
          <PickImage/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Name'/>
          <TextInput style={styles.textInput} placeholder='Vehicle Year'/>
          <TextInput style={styles.textInput} placeholder='Vehicle Make and Model'/>
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
    marginTop: '5%'
  },
  saveButton: {
    flex: 1
  }
})
export default Profile