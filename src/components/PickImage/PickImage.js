import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker'

class PickImage extends Component {
  state = {
    pickedImage: null
  }


  render() {
    return (
     <View style={styles.container}>
       <View style={styles.placeholder}>
         <Image source={this.props.selectedImage} style={styles.previewImage}></Image>
       </View>
       <View style={styles.button}>
         <Button title='Pick Image' onPress={this.props.selectImage}></Button>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: '70%',
    borderRadius: 5
  },
  button: {
    margin: 8
  },
  previewImage: {
      width: "100%",
      height: "100%",
  }
});

export default PickImage