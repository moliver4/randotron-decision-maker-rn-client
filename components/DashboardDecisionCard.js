import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const DashboardDecisionCard = props => {

  return (
    <View style={styles.container}>
        <Text>
            Your Decision Here
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
})

export default DashboardDecisionCard;