import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  // createMaterialBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen'
import DashboardScreen from '../screens/DashboardScreen'
import LoadingScreen from '../screens/LoadingScreen'
import FormScreen from '../screens/FormScreen'
import HelpScreen from '../screens/HelpScreen'
import DecisionScreen from '../screens/DecisionScreen'


import Colors from '../constants/Colors';


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.extra : Colors.accent,
    borderBottomWidth: 0
  },

  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.additional
  
};

const AuthNavigator = createStackNavigator(
    {
      Auth: LoginScreen
    },
    {
      defaultNavigationOptions: defaultNavOptions
    }
    
  );

const DecisionsStackNavigator = createStackNavigator(
    {
      Dashboard: {
          screen: DashboardScreen
      },
      Decision: {
        screen: DecisionScreen
      }
    },
    {
     defaultNavigationOptions: defaultNavOptions
    }
  );

  const HelpStackNavigator = createStackNavigator(
    {
      Help: {
        screen: HelpScreen
      }
    },
    {
     defaultNavigationOptions: defaultNavOptions
    }
    
  );


  const NewStackNavigator = createStackNavigator(
    {
      Form: {
        screen: FormScreen
      },
      Decision: {
        screen: DecisionScreen
      }
    },
    {
     defaultNavigationOptions: defaultNavOptions
    }
  );

const tabScreenConfig = {
  Dashboard: {
    screen: DecisionsStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          null
        ) : (
          'Home'
        )
    }
  },
  New: {
    screen: NewStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-add-circle-outline" size={30} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          null
        ) : (
          'New Question'
        )
    }
  },
  Help: {
    screen: HelpStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-help" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          null
        ) : (
          'Help'
        )
    }
  }
};


const DashboardNewHelpTabNavigator =
  Platform.OS === 'android'
    ? createBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: false,
        barStyle: {
          backgroundColor: Colors.additional
        },
        initialRouteName: 'New'
      }
      )
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans'
          },
          activeTintColor: Colors.additional
        },
        initialRouteName: 'New'
      }

  );




const MainNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    Auth: AuthNavigator,
    Dashboard: DashboardNewHelpTabNavigator
  })
  
  

export default createAppContainer(MainNavigator);