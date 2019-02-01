import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import DetailScreen from '../screens/DetailScreen';

const Tab1Stack = createStackNavigator({
  Tab1: Tab1Screen,
  Detail: DetailScreen
},{
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

Tab1Stack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TabScreen = createBottomTabNavigator({
  Tab1: {
    screen: Tab1Stack,
    navigationOptions:{
      
    }
  },
  Tab2: {
    screen: Tab2Screen,
    navigationOptions:{
      
    }
  },
},{
  initialRouteName: 'Tab1',
  tabBarOptions:{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    showLabel: true,
    style: {
      backgroundColor: 'white',
    },
  },
});


TabScreen.navigationOptions  = {
  header: null, // if null, Header Back button
};

export default TabScreen;