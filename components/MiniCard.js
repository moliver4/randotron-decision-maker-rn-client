import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from './DefaultText';


const MiniCard = ( props ) => {
    console.log(props)
    //props have index, onselect question, question object with all the info
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => console.log('im pressedddd AF')}> 
                <View>
                    <View style={{...styles.row, ...styles.header }}>
                
                            <DefaultText style={styles.title} numberOfLines={1}>
                                
                                {props.question.question.title}
                            </DefaultText>
                       
                    </View>
          
                <View style={{ ...styles.row, ...styles.decision }}>
                    <DefaultText>{props.question.decision.choice.title}</DefaultText>
                </View>
                
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
      width: 300,
      maxWidth: '90%',
      maxHeight: 100,
      alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%'
    },
    header: {
        alignItems: 'center',
        height: 50
    },
    decision: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
      }

  });

export default MiniCard;
