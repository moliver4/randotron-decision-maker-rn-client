import React from 'react';
import { View, Button, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


const ChoiceCard = ({ choice, index } ) => {

    const reason = choice.reason.length > 0? true : false
    
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text> Choice {index+1}: {choice.title} </Text>
                    {reason? <Text> Readon: {choice.reason} </Text> : null }
                    <Text> Weight: {choice.weight} </Text>
                </View>
                <Button title='delete' />
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
