import React from 'react';
import { View, FlatList, Text,  StyleSheet } from 'react-native';
import DefaultText from './DefaultText';

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
            routeName: 'Decision',
            params: {
              oldDecision: true,
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
        <DefaultText>
            {props.questions.length <1 ? 'No decisions yet! Let us help you make some!': 'Here are your previous decisions:' } 
        </DefaultText>
      <FlatList
        data={props.questions}
        keyExtractor={(item, index) => `question-${index}`}
        renderItem={renderQuestionItem}
        style={{ width: '100%', paddingTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
});

export default QuestionList;