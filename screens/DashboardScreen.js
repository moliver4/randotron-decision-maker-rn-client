import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


class DashboardScreen extends React.Component {
    render () {
        return (
            <View style={styles.container} >
                <Text>
                    Dashboard SCREEN
                </Text>
                <Button title="should move me forward from Dash to Decision Screen" onPress={() => this.props.navigation.navigate('Decision')}/>
            </View>
        )
    }
}

DashboardScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Decisions', 
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export default DashboardScreen