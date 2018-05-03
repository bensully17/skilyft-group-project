import { Navigation } from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth';
import CarpoolScreen from './src/screens/Carpool/Carpool'
import ProfileScreen from './src/screens/Profile/Profile'
import CreateAccountScreen from './src/screens/CreateAccount/CreateAccount'
import PlanTrip from './src/screens/PlanTrip/PlanTrip'

// Register Screens 

Navigation.registerComponent('skilyft.AuthScreen', () => AuthScreen)
Navigation.registerComponent('skilyft.CarpoolScreen', () => CarpoolScreen)
Navigation.registerComponent('skilyft.ProfileScreen', () => ProfileScreen)
Navigation.registerComponent('skilyft.CreateAccountScreen', () => CreateAccountScreen)
Navigation.registerComponent('skilyft.PlanTripIOS', () => PlanTrip)

//Start an app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'skilyft.AuthScreen',
    title: 'SkiLyft'
  }
})