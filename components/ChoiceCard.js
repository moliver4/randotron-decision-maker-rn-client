import React from 'react';
import { View, Button, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ChoiceCard = ({ choice, index, deleteChoice } ) => {

    
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text> Choice {index+1}: {choice.title} </Text>
                    <Text> Weight: {choice.weight} </Text>
                </View>
                {deleteChoice ? <AntDesign name="delete" size={20} color='firebrick' onPress={()=>deleteChoice(choice)} /> : null}
            </View>


        </View>
    );
}

const styles=StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: '80%'
      },
    row: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    column: {
        alignItems: 'flex-start'
    }
})



export default ChoiceCard;
