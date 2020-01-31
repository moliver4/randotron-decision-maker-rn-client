import React from 'react';
import { View, TextInput, Text, Button, ScrollView, Keyboard, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';

const ChoiceForm = ( { newChoice, titleChange, reasonChange, weightChange }) => {

   
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
                <View> 
                   
                    <TextInput
                        onChangeText={text=>reasonChange(text)}
                        name='reason'
                        value={newChoice.reason}
                        placeholder='Enter a Reason (Optional)'
                    />
                </View>
            
                
                <View > 
            
                    <Text> How badly do you want this choice? Must be Number</Text>
                    
                    <TextInput
                        onChangeText={text=>weightChange(text)}
                        name='order'
                        keyboardType='numeric'
                        value={newChoice.weight}
                        placeholder='Optional or Please make sure all weights total to 10'
                    />
                </View>
            </View>
            <View >
                <Button title='submit' onPress={() => console.log('submitting', newChoice)}/>
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