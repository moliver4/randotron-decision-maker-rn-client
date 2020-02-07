import React from 'react';
import { View, TextInput, KeyboardAvoidingView, Text, Button, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import Colors from '../constants/Colors';

const ChoiceForm = ( { newChoice, titleChange, weightChange, submitAddChoice, cancelAddChoice }) => {

   
    return (
        <View style={styles.container}>
            <View >

                <View style={styles.choiceInputContainer}> 
                    <Text style={styles.text}> Choice: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text=>titleChange(text)}
                        name='title'
                        value={newChoice.title}
                        placeholder='Enter Choice'
                    />
                </View>
            
                
                <View style={{ alignItems: "center"}}> 
            
                    <Text style={styles.text}> Weight: </Text> 
                    <Text style={styles.text}>(Optional)</Text>
                    
                    <NumericInput 
                        type='up-down' 
                        value={newChoice.weight} 
                        minValue={1}
                        maxValue={10}
                        rounded
                        containerStyle={{margin: 10}}
                        borderColor={Colors.accent}
                        
                        onChange={value => weightChange(value)} 
                    />
                </View>
            </View>
            <View style={styles.buttonRow} >
                <Button title='cancel' onPress={cancelAddChoice}/>
                <Button title='save choice' onPress={submitAddChoice}/>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
       justifyContent: 'center',
       width: '80%'
    },
    text: {
        padding: 5,
        fontSize: 15,
        fontFamily: 'open-sans'
    },
    input: {
            height: 40,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginVertical: 10
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})



export default ChoiceForm;