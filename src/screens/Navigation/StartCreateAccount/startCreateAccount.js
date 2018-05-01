import { Navigation } from 'react-native-navigation'

const startCreateAccount = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'skilyft.CreateAccountScreen',
      title: 'SkiLyft'
    }
  })
}
export default startCreateAccount
