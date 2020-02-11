import React from 'react';
import { View, TextInput, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Text, Keyboard, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input'
import Colors from '../constants/Colors';

const ChoiceForm = ( { newChoice, titleChange, weightChange, submitAddChoice, cancelAddChoice }) => {

   
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
            <View >

                <View style={styles.choiceInputContainer}> 
                   
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
                <TouchableOpacity style={styles.button} onPress={cancelAddChoice}> 
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={submitAddChoice}> 
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
               
            </View>
            </View>
        </TouchableWithoutFeedback>
            
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
        fontFamily: 'open-sans',
        color: Colors.primary
    },
    input: {
            height: 40,
            borderBottomColor: 'white',
            borderBottomWidth: 2,
            marginVertical: 20
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        marginVertical: Dimensions.get('window').height / 40,
        backgroundColor: 'white',
        paddingVertical: 5,
        width: Dimensions.get('window').width /4,
        borderRadius: 25,   
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.26,
        elevation: 5,
        alignItems: 'center'
      },
      cancelButtonText: {
        color: 'red',
        fontFamily: 'open-sans',
        fontSize: 14
      },
      buttonText: {
        color: 'darkgreen',
        fontFamily: 'open-sans',
        fontSize: 14
      }
})



export default ChoiceForm;