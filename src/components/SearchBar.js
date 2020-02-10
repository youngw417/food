import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit }) => {
  return (
    <View style={Styles.backgroundStyle}>
      <Feather name="search" style={Styles.iconStyle} />
      <TextInput 
      autoCapitalize= "none"
      autoCorrect={false}  
      style={Styles.inputStyle} placeholder='Search' value={term} onChangeText={ onTermChange }
      onEndEditing={onTermSubmit} />
    </View>
  );
};

const Styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    
    flex: 1,
    fontSize: 18

  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15


  }
});

export default SearchBar;
