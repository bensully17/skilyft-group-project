
import React, { Component } from 'react'
import { View, Button, StyleSheet, Switch, Text, Picker } from 'react-native'
import DatePickerIOS from '../../components/DatePickerIOS/DatePicker'
import mainTabs from '../Navigation/MainTabs/startMainTabs'
import MtnPicker from '../../components/Picker/MtnPicker'
class DatePicker extends Component {
  state = {
    language: null,
    switch: false
  }
  startMainTabs = () => {
    mainTabs()
  }

  runSwitch = () => {
    let onOff = this.state.switch
    this.setState({switch: !onOff})
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
          <Text style={styles.switchText}>Willing to drive?</Text>
          <Switch value={this.state.switch} onValueChange={this.runSwitch}></Switch>
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
  switchText: {
    paddingBottom: 10
  },
  mtnPicker: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignItems: 'center'  
  }
})
export default DatePicker