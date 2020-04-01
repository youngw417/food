import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelpApi from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [results, setResults] = useState(null);

  console.log('results', results);
  const getResult = async id => {
    const response = await yelpApi.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ResultsShowScreen;
