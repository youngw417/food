import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const yelpApi = async searchTerm => {
    try {
      console.log('hi there');
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Geneva'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log('err', err.message);
      setErrorMessage('Something Went Wrong');
    }
  };

  useEffect(() => {
    yelpApi('korean');
  }, []);

  return [yelpApi, results, errorMessage];
};
