import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import Colors from '../constants/Colors'

const HelpInfo = () => {
    return (
        
            <View style={styles.container}>
                <Text style={styles.title}>
                    Decision Fatigue is Real.
                </Text>
                
                <Text style={styles.text}>
                    We make so many decisions throughout our day that we end up mentally drained.
                </Text>
                <Text style={styles.text}>
                    It adds up. 
                </Text>
                <Text style={styles.text}>Can't decide where to eat? Who should foot the bill? What movie to watch?</Text>
                <Text style={styles.text}>
                    Save your brain cells and avoid awkward social decisions with Randotron!
                </Text>
                <Text style={styles.text}>
                    Simply enter in a question and your choices, and we will randomly select an answer for you!
                </Text>
                <Text style={styles.text}>
                    If you or your group members are leaning more towards one choice or another, include a corresponding weight, and we will take that into account. 
                </Text>
                <Text style={styles.text}>
                    If you don't like your answer, you can simply rerun it.
                </Text>
    

                <Text style={styles.text}>
                    To save your answers to view later, please login with Google!
                </Text>
            </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        paddingBottom: 20
    },
    text: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        paddingBottom: 8,
        color: Colors.primary
    }
})

export default HelpInfo;
