import React from 'react';
import { View, Button, Text, TextInput, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'
const MiniChoiceCard = ({ choice, index} ) => {

    
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.text} > Choice {index+1}: </Text>
                    <Text style={styles.choiceName}> {choice.title} </Text>
                </View>
                <View style={styles.weight}>
                    <Text style={styles.text}> Weight: {choice.weight} </Text>
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
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
        flexShrink: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 5
    },
    weight: {
        minWidth: Dimensions.get('window').width *0.1
    },
    text: {
        color: Colors.primary
    },
    choiceName:{
        color: Colors.primary,
    }
})



export default MiniChoiceCard;