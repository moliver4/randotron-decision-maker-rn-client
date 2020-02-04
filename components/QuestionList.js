import React from 'react';
import { View, FlatList, Text,  StyleSheet } from 'react-native';

import MiniCard from './MiniCard';

const QuestionList = props => {

  const renderQuestionItem = itemData => {
    //itemData has an index and an item (question object)
    return (
      <MiniCard
        question={itemData.item}
        index={itemData.index}
        onSelectQuestion={() => {
          props.navigation.navigate({
            routeName: 'DecisionScreen',
            params: {
              DecisionId: itemData.item.decision.id
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
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20
  }
});

export default QuestionList;