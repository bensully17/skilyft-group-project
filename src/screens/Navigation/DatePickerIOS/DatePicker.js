import { Navigation } from 'react-native-navigation'

const startSelectDate = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'skilyft.PlanTripIOS',
      title: 'SkiLyft'
    }
  })
}
export default startSelectDate