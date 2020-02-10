import React from 'react';
import { View, Button, Text, TextInput, ScrollView, Dimensions, StyleSheet } from 'react-native';

const MiniChoiceCard = ({ choice, index} ) => {

    
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text> Choice {index+1}: {choice.title} </Text>
                </View>
                <View style={styles.column}>
                    <Text> Weight: {choice.weight} </Text>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    card: {
        shadowColor: 'black',
        width: Dimensions.get('window').width * 0.85,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
      },
    row: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        alignItems: 'center'
    }
})



export default MiniChoiceCard;