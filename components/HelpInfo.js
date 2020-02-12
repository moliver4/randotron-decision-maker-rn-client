import React from 'react';
import { ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import Colors from '../constants/Colors'

const HelpInfo = () => {
    return (
        

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>
                    Decision Fatigue is Real.
                </Text>
            
                <Text style={styles.text}>
                    Did you know that a study showed judges are significantly more likely to approve parole in the morning than in the late afternoon?
                </Text>
                <Text style={styles.text}>
                    All those decisions we make throughout our day can leave us mentally drained.
                </Text>
                <Text style={{...styles.text, fontStyle: 'italic'}}>
                    It adds up. 
                </Text>
                <Text style={styles.text}>Can't decide where to eat? Who should foot the bill? What movie to watch?</Text>
                <Text style={styles.text}>
                    Save your brain cells and avoid awkward social decisions with Choices!
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
                    P.S. To save your answers to view and rerun later, please login with Google.
                </Text>
            </ScrollView>
      
    );
}
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: height*0.1,
        marginBottom: height/20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        paddingBottom: 20,
        color: Colors.additional,
        
    },
    text: {
        textAlign: 'center',
        paddingBottom: height/30,
        color: Colors.primary
    }
})

export default HelpInfo;
