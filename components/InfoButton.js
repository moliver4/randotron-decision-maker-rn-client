import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors'

export default InfoButton = (props) => {
    return (
        <TouchableOpacity style={styles.position} onPress={() => props.setModalVisible(true)}> 
            <View style={styles.buttonContainer} >
                <MaterialCommunityIcons name="information-variant" size={30} color='white'/>
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
        backgroundColor: Colors.accent
    }
})
