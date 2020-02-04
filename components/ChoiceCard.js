import React from 'react';
import { View, Button, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const ChoiceCard = ({ choice, index, deleteChoice } ) => {

    
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text> Choice {index+1}: {choice.title} </Text>
                    <Text> Weight: {choice.weight} </Text>
                </View>
                {deleteChoice ? <Button title='delete' onPress={()=>deleteChoice(choice)} /> : null}
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
        padding: 20,
        borderRadius: 10
      },
    row: {
        padding: 5,
        flexDirection: 'row'
    },
    column: {
        alignItems: 'center'
    }
})



export default ChoiceCard;
