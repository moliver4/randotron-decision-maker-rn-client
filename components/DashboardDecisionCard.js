import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import ServerAdapter from '../services/ServerAdapter'
import { connect } from 'react-redux'
import Colors from '../constants/Colors'
import { loadCurrentQuestion, deleteQuestion} from '../store/actions/questions'

const MiniCard = ( props ) => {


    const handleSelectQuestion = () => {
        props.loadCurrentQuestion(props.question)
        props.onSelectQuestion()
    }

    const showChoices = () => {
        return props.question.choices.map( choice => {
            if (choice.id === props.question.decision.choice.id) {
                return (
                <View style={styles.column} key={choice.id}> 
                  <Text key={choice.id} style={{...styles.decision}}> {choice.title} </Text>
                </View>
                )
            } else {
                return (
                <View style={styles.column} key={choice.id}>
                  <Text key={choice.id} style={styles.choice}> {choice.title}</Text>
                </View>
                )
            }
        })

    }

    const handleDeleteRequest = () => {
      Alert.alert('Delete this Question?', 'Are you sure you want to delete this question?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes', 
          onPress: () => deleteQuestionHandler(),
          style: 'destructive'
        },
      ])
    }

    const deleteQuestionHandler = () => {

      console.log('deleting this question', props.question.question.id)
      let id = props.question.question.id
      let prom = ServerAdapter.deleteQuestion(id)
      prom.then(data => handleDelete(data))
    }

    const handleDelete = (question) => {
      props.deleteQuestion(question)
    }
    return (
           
                <TouchableOpacity  style={styles.card} onPress={handleSelectQuestion} onLongPress={handleDeleteRequest}> 
                    <View>
                        <View style={{...styles.header }}>
                    
                                <Text style={styles.title} numberOfLines={1}>
                                    
                                    {props.question.question.title}
                                </Text>
                        
                        </View>
            
                      <View style={{ ...styles.row}}>
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
      backgroundColor: 'white',
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
        justifyContent: 'space-evenly',
        height: '50%',
    },
    header: {
        paddingTop: 10,
        textAlign: 'center',
        minHeight: 50
    },
    decision: {
        paddingHorizontal: 10,
        height: 30,
        fontFamily: 'open-sans-bold',
        color: Colors.extra
    },
    choice: {
        paddingHorizontal: 10,
        height: 30,
        fontFamily: 'open-sans',
        color: Colors.primary
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
      },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 20,
      color: Colors.additional,
      textAlign: 'center'
    }, 
    column: {
      flexShrink: 1
    }

  });

  const mapDispatchtoProps = dispatch => {
    return {
        loadCurrentQuestion: (question) => dispatch(loadCurrentQuestion(question)),
        deleteQuestion: (question) => dispatch(deleteQuestion(question))

      }
  }

export default connect(null, mapDispatchtoProps)(MiniCard);
