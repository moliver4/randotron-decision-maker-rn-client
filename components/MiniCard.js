import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MiniCard = ( props ) => {
    return (
        <TouchableOpacity> 
            <View style={{ ...styles.card}}>
                <Text>Hello?</Text>
                <Text>{props.question.question.title}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    card: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
        
    }
  });

export default MiniCard;
