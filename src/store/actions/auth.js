import { TRY_AUTH, AUTH_SET_TOKEN } from './actionTypes'
import TripPlanner from '../../screens/Navigation/DatePickerIOS/DatePicker'
import Profile from '../../screens/Navigation/StartProfile/Profile'

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    const API_KEY = 'AIzaSyA_9tzGnz4okwb5i4047pRSNedUEpc9FwI'
    let URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + API_KEY
    if (authMode === 'signup') {
      URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + API_KEY
    }
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .catch(err => {
      console.error(err)
      alert('Authentication failed, please try again.')
    })
    .then(res => res.json())
    .then(parsedRes => {
      if (!parsedRes.idToken) {
        alert('Authentication failed, please try again.')
      }
      else if (authMode === 'login'){
        dispatch(authSetToken(parsedRes.idToken))
        TripPlanner()
        }
      else if (authMode === 'signup'){
        dispatch(authSetToken(parsedRes.idToken))
        Profile()
      }
      
      console.log(parsedRes);
      
    })
  }
}

export const authSetToken = (token) => {
  return({
    type: AUTH_SET_TOKEN,
    token: token
  })
}