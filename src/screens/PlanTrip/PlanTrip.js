
import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import DatePickerIOS from '../../components/DatePickerIOS/DatePicker'
import mainTabs from '../Navigation/MainTabs/startMainTabs'
class DatePicker extends Component {
  startMainTabs = () => {
    mainTabs()
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.datePicker}>
          <DatePickerIOS />  
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
    flex: 1
  },
  datePicker: {
    flex: 1
  },
  button: {
    flex: 1
  }
})
export default DatePicker