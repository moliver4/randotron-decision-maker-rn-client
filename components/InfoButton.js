import React from 'react'
import { View, Dimensions,TouchableOpacity, StyleSheet } from 'react-native';
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
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const styles=StyleSheet.create({
    position:{
        position: 'absolute', 
        bottom: height/20, 
        right: width/10
    },
    buttonContainer: {
        width: width/10,
        height: width/10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.accent
    }
})
