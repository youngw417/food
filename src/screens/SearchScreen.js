import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [yelpApi, results, errorMessage] = useResults();

  const showResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => yelpApi}
      />
      {errorMessage ? (
        <Text style={Styles.errorStyle}>{errorMessage}</Text>
      ) : null}

      <ScrollView>
        <ResultsList results={showResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={showResultsByPrice('$$')} title="Big Pricer" />
        <ResultsList results={showResultsByPrice('$$$')} title="Big Spender" />
        {!showResultsByPrice('$$$$') && (
          <ResultsList
            results={showResultsByPrice('$$$$')}
            title="Bigger Spender"
          />
        )}
      </ScrollView>
    </>
  );
};

const Styles = StyleSheet.create({
  errorStyle: {
    color: 'red'
  }
});

export default SearchScreen;
