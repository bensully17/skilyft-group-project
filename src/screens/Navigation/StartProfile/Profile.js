import { Navigation } from 'react-native-navigation'

const startProfile = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'skilyft.ProfileScreen',
      title: 'SkiLyft'
    }
  })
}
export default startProfile