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
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );
const DecisionsNavigator = createStackNavigator(
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

  const HelpNavigator = createStackNavigator(
    {
      Dashboard: {
        screen: DashboardScreen
      },
      Help: {
        screen: HelpScreen
      }
    },
    {
     defaultNavigationOptions: defaultNavOptions
    }
  );


  const NewNavigator = createStackNavigator(
    {
      Dashboard: {
        screen: DashboardScreen
      },
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
    screen: DecisionsNavigator,
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
    screen: NewNavigator,
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
    screen: HelpNavigator,
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
      });



const AuthNavigator = createStackNavigator(
    {
      Auth: LoginScreen
    },
    {
      defaultNavigationOptions: defaultNavOptions
    }
  );

const DashNavigator = createDrawerNavigator(
    {
      DashboardHome: {
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
        },
        contentComponent: props => {
                //   const dispatch = useDispatch();
                  return (
                    <View style={{ flex: 1, paddingTop: 20 }}>
                      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerItems {...props} />
                        <Button
                          title="Logout"
                          color={Colors.primary}
                          onPress={() => {
                              console.log('this should log us out')
                            {/* dispatch(authActions.logout()); */}
                            // props.navigation.navigate('Auth');
                          }}
                        />
                      </SafeAreaView>
                    </View>
                  );
                }
        }
    },
    
  );





// const MainNavigator = createSwitchNavigator({
//   Startup: StartupScreen,
//   Auth: AuthNavigator,
//   Shop: ShopNavigator
// });


const MainNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    Auth: AuthNavigator,
    Dashboard: DashNavigator
  })
  
  

export default createAppContainer(MainNavigator);