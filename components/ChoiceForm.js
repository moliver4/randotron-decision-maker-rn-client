import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input'

const ChoiceForm = ( { newChoice, titleChange, reasonChange, weightChange, submitAddChoice, cancelAddChoice }) => {

   
    return (
        <View style={styles.container}>
            <View >

                <View style={styles.choiceInputContainer}> 
                    <Text> Choice: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text=>titleChange(text)}
                        name='title'
                        value={newChoice.title}
                        placeholder='Enter Choice'
                    />
                </View>
            
                
                <View style={{ alignItems: "center"}}> 
            
                    <Text> Weight: </Text> 
                    <Text>(Optional but all must total up to 10 for best results)</Text>
                    
                    <NumericInput 
                        type='up-down' 
                        value={newChoice.weight} 
                        minValue={0}
                        maxValue={10}
                        onChange={value => weightChange(value)} 
                    />
                </View>
            </View>
            <View >
                <Button title='cancel' onPress={cancelAddChoice}/>
                <Button title='save choice' onPress={submitAddChoice}/>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
       justifyContent: 'space-between'
    },
    choiceInputContainer:{

    },
    input: {
    
    
            height: 30,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            marginVertical: 10
  
    }
})



export default ChoiceForm;