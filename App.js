import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import AuthScreen from './src/screens/Auth/Auth'
import CarpoolScreen from './src/screens/Carpool/Carpool'
import ProfileScreen from './src/screens/Profile/Profile'
import CreateAccountScreen from './src/screens/CreateAccount/CreateAccount'
import PlanTrip from './src/screens/PlanTrip/PlanTrip'

const store = configureStore()
// Register Screens 

Navigation.registerComponent('skilyft.AuthScreen', () => AuthScreen, store, Provider)
Navigation.registerComponent('skilyft.CarpoolScreen', () => CarpoolScreen, store, Provider)
Navigation.registerComponent('skilyft.ProfileScreen', () => ProfileScreen, store, Provider)
Navigation.registerComponent('skilyft.CreateAccountScreen', () => CreateAccountScreen, store, Provider)
Navigation.registerComponent('skilyft.PlanTripIOS', () => PlanTrip, store, Provider)

//Start an app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'skilyft.AuthScreen',
    title: 'SkiLyft'
  }
})