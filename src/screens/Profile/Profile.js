import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import PickImage from '../../components/PickImage/PickImage'

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <PickImage/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Name'/>
          <TextInput style={styles.textInput} placeholder='Vehicle Year'/>
          <TextInput style={styles.textInput} placeholder='Vehicle Make and Model'/>
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
    width: '80%'
  },
  PickImage: {
    width: '80%'
  }
})
export default Profile