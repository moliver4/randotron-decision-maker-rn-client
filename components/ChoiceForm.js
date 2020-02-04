import React from 'react';
import { View, TextInput, Text, Button, ScrollView, Keyboard, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input'

const ChoiceForm = ( { newChoice, titleChange, reasonChange, weightChange, submitAddChoice, cancelAddChoice }) => {

   
    return (
        <View>
            <View >

                <View> 
                    <Text> Choice: </Text>
                    <TextInput
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
                <Button title='submit' onPress={submitAddChoice}/>
            </View>
        </View>
            
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: '#ececec',
        paddingLeft: 5
    }
})



export default ChoiceForm;