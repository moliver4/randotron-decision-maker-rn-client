import React from 'react';
import { View, Button, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const ChoiceCard = ({ choice, index, deleteChoice, decision } ) => {

    
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text> Choice {index+1}: {choice.title} </Text>
                    <Text> Weight: {choice.weight} </Text>
                </View>
                {decision !== null ? <Button title='delete' onPress={()=>deleteChoice(choice)} /> : null}
            </View>


        </View>
    );
}

const styles=StyleSheet.create({
    row: {
        padding: 5,
        flexDirection: 'row'
    },
    column: {
        alignItems: 'center'
    }
})



export default ChoiceCard;
