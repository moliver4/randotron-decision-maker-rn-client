import React from 'react';
import { View, FlatList, Text,  StyleSheet } from 'react-native';

import MiniCard from './MiniCard';

const QuestionList = props => {
    // console.log('ORIGINAL PROP QUESTIONS', props.questions)
  const renderQuestionItem = itemData => {
    //   console.log('things im getting', itemData)
    //   return(
    //       <Text>
    //           HELLO?????
    //           {itemData.item.question.title}
    //       </Text>
    //   )
    return (
      <MiniCard
        question={itemData.item.question}
        onSelectQuestion={() => {
          props.navigation.navigate({
            routeName: 'DecisionScreen',
            params: {
              QuestionId: question.decision.id
            }
          });
        }}
      />
    );
  };

//   return (
//       <View>
//           <Text> Hello???</Text>
//       </View>
//   )

  return (
    <View style={styles.list}>
        <Text> Hello??</Text>
      <FlatList
        data={props.questions}
        keyExtractor={(item, index) => `question-${index}`}
        renderItem={renderQuestionItem}
        
      />
    </View>
  );
};
// style={{ width: '100%' }}
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default QuestionList;