import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { useDispatch } from 'react-redux';

import LoginScreen from '../screens/LoginScreen'
import DashboardScreen from '../screens/DashboardScreen'
import LoadingScreen from '../screens/LoadingScreen'
import FormScreen from '../screens/FormScreen'
import HelpScreen from '../screens/HelpScreen'
import DecisionScreen from '../screens/DecisionScreen'


import Colors from '../constants/Colors';


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  
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
          <Text style={{ fontFamily: 'open-sans-bold' }}>Home</Text>
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
          <Ionicons name="ios-add-circle-outline" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>New Question</Text>
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
          <Text style={{ fontFamily: 'open-sans-bold' }}>Help</Text>
        ) : (
          'Help'
        )
    }
  }
};


const DashboardNewHelpTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'open-sans'
          },
          activeTintColor: Colors.accent
        }

      }
  );


const AppDrawerNavigator = createDrawerNavigator(
    {
      DashboardHome: {
        //screen: DashboardScreen
        screen: DashboardNewHelpTabNavigator,
        navigationOptions: {
          drawerLabel: 'Home'
        }
      }
    },
    {
      contentOptions: {
        activeTintColor: Colors.accent,
        labelStyle: {
          fontFamily: 'open-sans-bold'
        }
        // contentComponent: props => {
        //         //   const dispatch = useDispatch();
        //           return (
        //             <View style={{ flex: 1, paddingTop: 20 }}>
        //               <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        //                 <DrawerItems {...props} />
        //                 <Button
        //                   title="Logout"
        //                   color={Colors.primary}
        //                   onPress={() => {
        //                       console.log('this should log us out')
        //                     {/* dispatch(authActions.logout()); */}
        //                     // props.navigation.navigate('Auth');
        //                   }}
        //                 />
        //               </SafeAreaView>
        //             </View>
        //           );
        //         }
        }
    },
    
  );


const MainNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    Auth: AuthNavigator,
    Dashboard: AppDrawerNavigator
  })
  
  

export default createAppContainer(MainNavigator);