
import React, { Component } from 'react'
import { View, Button, StyleSheet, Switch, Text, Picker, DatePickerIOS, ImageBackground } from 'react-native'
import image from '../../Assets/SkiLyftOverlay.png'
import mainTabs from '../Navigation/MainTabs/startMainTabs'
import MtnPicker from '../../components/Picker/MtnPicker'
import { connect } from 'react-redux'
import { changeDest, setDate, switchDrive } from '../../store/actions/index'
import CustomButton from '../../components/CustomButton/CustomButton'
const API_URL = 'https://skylift-db.herokuapp.com/riders'

let departing

class PlanTripNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drive: false,
      departing: new Date(),
      destination: undefined,
      imageUrl: props.imageUrl,
      userName: props.name,
      firstName: props.name,
      lastName: props.name,
      vehicle: props.vehicle
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
    fetch(API_URL + '/match', {
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

  showState = () => {
    console.log(this.state);
    
  }

  render() {
    return(
      <ImageBackground source={image} style={styles.image}>
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
            <CustomButton title='Submit' onPress={this.startMainTabs} style={styles.customButton} color='#efefef'>Submit</CustomButton>
          </View>
        </View>
        <Button title={'Show State'} onPress={this.showState}></Button>
      </ImageBackground>
    )
    console.log(this.state.date)
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  customButton: {
    backgroundColor: '#efefef',
    
  },
  datePicker: {
    flex: 2
  },
  button: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  drive: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignItems: 'center'  
  },
  switchText: {
    paddingBottom: 10,
    fontSize: 24
  },
  mtnPicker: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignItems: 'center'  
  },
  image: {
    flex: 1,
    alignItems: 'center'
  }
})

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect() (PlanTripNew)