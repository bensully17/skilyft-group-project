
import React, { Component } from 'react'
import { View, Button, StyleSheet, Switch, Text, Picker } from 'react-native'
import DatePickerIOS from '../../components/DatePickerIOS/DatePicker'
import mainTabs from '../Navigation/MainTabs/startMainTabs'
import MtnPicker from '../../components/Picker/MtnPicker'
class DatePicker extends Component {
  state = {
    language: null
  }
  startMainTabs = () => {
    mainTabs()
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.datePicker}>
          <DatePickerIOS />  
        </View>
        <View style={styles.mtnPicker}>
          <MtnPicker/>
        </View>
        <View style={styles.switch}>
          <Text>Willing to drive?</Text>
          <Switch></Switch>
        </View>
        <View style={styles.button}>
          <Button title='Submit' onPress={this.startMainTabs}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: 'lightblue'
  },
  datePicker: {
    flex: 2
  },
  button: {
    flex: 1
  },
  switch: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignItems: 'center'  
  },
  mtnPicker: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignItems: 'center'  
  }
})
export default DatePicker