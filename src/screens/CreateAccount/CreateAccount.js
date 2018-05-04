import React, { Component } from 'react';
import { View, Dimensions, Text, Button, TextInput, StyleSheet, ImageBackground} from 'react-native'
import image from '../../Assets/SkiLyft1.png'
import startDatePicker from '../Navigation/DatePickerIOS/DatePicker'
import startNewAccount from '../Navigation/StartCreateAccount/startCreateAccount'
import CustomButton from '../../components/CustomButton/CustomButton'
import { connect } from 'react-redux'
import validate from "../../utility/validation"
import { tryAuth } from '../../store/actions/index'

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    authMode: "signup",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.onLogin(authData, this.state.authMode);
    }

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
  this.setState(prevState => {
    return {
      controls: {
        ...prevState.controls,
        confirmPassword: {
          ...prevState.controls.confirmPassword,
          valid:
            key === "password"
              ? validate(
                  prevState.controls.confirmPassword.value,
                  prevState.controls.confirmPassword.validationRules,
                  connectedValue
                )
              : prevState.controls.confirmPassword.valid
        },
        [key]: {
          ...prevState.controls[key],
          value: value,
          valid: validate(
            value,
            prevState.controls[key].validationRules,
            connectedValue
          ),
          touched: true
        }
      }
    };
  })
}

  render () {
    let headingText = null;
    let confirmPasswordControl = null;

    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Email' style={styles.input} underlineColorAndroid='transparent' value={this.state.controls.email.value}onChangeText={val => this.updateInputState("email", val)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"/>
              <TextInput placeholder='Password' secureTextEntry style={styles.input} underlineColorAndroid='transparent'  value={this.state.controls.password.value}
                    onChangeText={val => this.updateInputState("password", val)}
                    valid={this.state.controls.password.valid}
                    touched={this.state.controls.password.touched}/>
            </View>
            {confirmPasswordControl}
            <CustomButton title='Submit' onPress={this.loginHandler} style={styles.input} color="#f7f7f7"> Submit </CustomButton>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    width: '100%'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderColor: '#bbb',
    padding: 5,
    margin: 8,
    borderRadius: 4
  },
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: '30%'
  },
  image: {
    flex: 1,
    alignItems: 'center'
  }
})


const mapDispatchToProps = dispatch => {
  return {
    onLogin: (authData, authMode) => dispatch(tryAuth(authData, authMode))
  };
};

export default connect(null, mapDispatchToProps)(AuthScreen);
