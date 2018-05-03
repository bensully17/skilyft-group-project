
import React, { Component } from 'react'
import { View, Button, StyleSheet, Switch, Text, Picker, DatePickerIOS } from 'react-native'
import mainTabs from '../Navigation/MainTabs/startMainTabs'
import MtnPicker from '../../components/Picker/MtnPicker'
import { connect } from 'react-redux'
import { changeDest, setDate, switchDrive } from '../../store/actions/index'
const API_URL = 'https://skylift-db.herokuapp.com/riders/match'

let departing

class PlanTrip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drive: false,
      departing: new Date(),
      destination: undefined,
      imageUrl: "https://s3-us-west-1.amazonaws.com/skilyft-photos/skilyft-ben.jpg",
      userName: "Ben",
      firstName: "Ben",
      lastName: "Sullivan",
      vehicle: "2011 range rover sport"
    }
  }
 
  startMainTabs = () => {
    const stateNow = {
      drive: this.state.drive,
      departing: this.state.departing,
      destination: this.state.destination,
      imageUrl: this.state.imageUrl,
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      vehicle: this.state.vehicle
    }    
    fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stateNow),
    })
    .then(res => res.json())
    .then(res => {
      this.props.navigator.push({
        screen: 'skilyft.CarpoolScreen',
        title: 'Carpoolers',
        passProps: {res}
      })
    }) 
    // mainTabs()
  }

  runSwitch = () => {
    let onOff = this.state.drive
    this.setState({drive: !onOff})
  }

  setDate = (newDate) => {
    this.setState({departing: newDate})
    console.log(this.state)
  }

  destChangeHandler = (event) => {        
    this.setState({
      destination: event
    })
    console.log(this.state)

  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.datePicker}>
          <DatePickerIOS date={this.state.departing} onDateChange={this.setDate}/>  
        </View>
        <View style={styles.mtnPicker}>
          <MtnPicker currentMtn={this.state.destination} changed={this.destChangeHandler}/>
        </View>
        <View style={styles.drive}>
          <Text style={styles.switchText}>Willing to drive?</Text>
          <Switch value={this.state.drive} onValueChange={this.runSwitch}></Switch>
        </View>
        <View style={styles.button}>
          <Button title='Submit' onPress={this.startMainTabs}></Button>
        </View>
      </View>
    )
    console.log(this.state.date)
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
  drive: {
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

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect() (PlanTrip)