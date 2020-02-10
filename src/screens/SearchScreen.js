import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [yelpApi, results, errorMessage ] = useResults();

  const showResultsByPrice = price => {
    return results.filter(result => result.price === price);
  }
  

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => yelpApi} />
      {errorMessage ? <Text style={Styles.errorStyle}>{errorMessage}</Text> : null}
      <Text>We found {results.length} results</Text>
      <ResultsList results={showResultsByPrice('$')} title="Cost Effective"  />
      <ResultsList results={showResultsByPrice('$$')} title="Big Pricer" />
      <ResultsList results={showResultsByPrice('$$$')} title="Big Spender" />
      {!showResultsByPrice('$$$$') && <ResultsList results={showResultsByPrice('$$$$')} title="Bigger Spender" />}
    </View>
  );
};

const Styles = StyleSheet.create({
  errorStyle: {
    color: 'red'
  }
});

export default SearchScreen;
