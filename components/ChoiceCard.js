import React from 'react';
import { View, Button, Text, TextInput, Dimensions, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors'

const ChoiceCard = ({ choice, index, deleteChoice } ) => {

    
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.header}> Choice {index+1}: </Text> 
                    <Text style={styles.input}> {choice.title} </Text>
                    <Text style={styles.header}> Weight:  {choice.weight}</Text>
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
        marginBottom: 10
      },
    row: {
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        alignItems: 'flex-start',
    },
    header: {        
        color: Colors.primary
    },
    input: {
        color: Colors.primary,
        paddingLeft: 15,
        paddingBottom: 3
    }
})



export default ChoiceCard;
