import { createStackNavigator } from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
import TabScreen from './TabNavigator';

const RootNavigator = createStackNavigator({
  First: { screen: FirstScreen },
  Tab: { screen: TabScreen },
},{
  initialRouteName: 'First',
  headerMode: 'screen',
  navigationOptions: {
    title: 'App',
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,
    },
    headerTintColor: 'blue',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default RootNavigator;