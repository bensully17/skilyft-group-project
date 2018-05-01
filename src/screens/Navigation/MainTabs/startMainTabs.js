import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-car', 30),
    Icon.getImageSource('ios-person', 30)
  ]).then(sources => Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'skilyft.CarpoolScreen',
        label: 'Carpoolers',
        title: 'Carpoolers',
        icon: sources[0]
      },
      {
        screen: 'skilyft.ProfileScreen',
        label: 'Profile',
        title: 'Your Profile',
        icon: sources[1]
      }
    ]
  }))
  
}

export default startTabs