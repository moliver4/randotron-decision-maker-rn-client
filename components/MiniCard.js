import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import Colors from '../constants/Colors'
import { loadCurrentQuestion} from '../store/actions/questions'

const MiniCard = ( props ) => {
    // console.log(props)
    //props have index, onselect question, question object with all the info


    const handleSelectQuestion = () => {
        props.loadCurrentQuestion(props.question)
        props.onSelectQuestion()
    }

    const showChoices = () => {
        return props.question.choices.map( choice => {
            if (choice.id === props.question.decision.choice.id) {
                return <Text key={choice.id} style={ {...styles.decision}}> {choice.title} </Text>
            } else {
                return <Text key={choice.id} style={styles.choice}> {choice.title}</Text>
            }
        })

    }
    return (
           
                <TouchableOpacity  style={styles.card} onPress={handleSelectQuestion}> 
                    <View>
                        <View style={{...styles.row, ...styles.header }}>
                    
                                <Text style={styles.title} numberOfLines={1}>
                                    
                                    {props.question.question.title}
                                </Text>
                        
                        </View>
            
                    <View style={{ ...styles.row, ...styles.decision }}>
                        {showChoices()}
                    </View>
                    
                    </View>
                </TouchableOpacity>
    
  
    );
}

const styles = StyleSheet.create({
    card: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
      alignSelf: 'stretch',
      maxWidth: '100%',
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
        textAlign: 'center',
        height: 50
    },
    decision: {
        paddingHorizontal: 10,
        height: 30,
        fontFamily: 'open-sans-bold'
    },
    choice: {
        paddingHorizontal: 10,
        height: 30,
        fontFamily: 'open-sans'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: Colors.primary,
        textAlign: 'center'
      }

  });

  const mapDispatchtoProps = dispatch => {
    return {
        loadCurrentQuestion: (question) => dispatch(loadCurrentQuestion(question))
      }
  }

export default connect(null, mapDispatchtoProps)(MiniCard);
