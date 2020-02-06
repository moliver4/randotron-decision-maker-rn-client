import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function InfoButton() {
    return (
        <TouchableOpacity style={styles.position}> 
            <View style={styles.buttonContainer} >
                <MaterialCommunityIcons name="information-variant" size={30} color='white' onPress={() => console.log('pressed AF')}/>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    position:{
        position: 'absolute', 
        bottom: 50, 
        right: 30
    },
    buttonContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D7F5EF'
    }
})
