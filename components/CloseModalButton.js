import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors'

export default CloseModalButton = (props) => {
    return (
        <TouchableOpacity style={styles.position} onPress={() => props.setModalVisible(false)}> 
            <View style={styles.buttonContainer} >
                <Text style={{color:Colors.accent}}>Got it!</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    position:{
        position: 'absolute', 
        bottom: 10, 
        right: 30
    },
    buttonContainer: {
        width: 60,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.extra
    }
})
