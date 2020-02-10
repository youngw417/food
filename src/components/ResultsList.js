import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={Styles.title}>{title}</Text>
      <FlatList
      horizontal
      keyExtractor={item => item.id}
      data={results}
      renderItem={({item})=> {
          return <ResultsDetail result={item} />;
      }}
       />
    </View>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultsList;
