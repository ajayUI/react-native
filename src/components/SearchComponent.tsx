// src/components/SearchComponent.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, ActivityIndicator, Image, StyleSheet } from 'react-native';
import infoSearchSerpApiService from '../services/infoSearchService';
import { SerpApiResult } from '../types';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SerpApiResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query) { return; }

    setLoading(true);
    setError(null);
    try {
      const data = await infoSearchSerpApiService.search(query);
      setResults(data.organic_results as SerpApiResult[]); // Ensure casting is correct based on actual API response structure
    } catch (err) {
      setError('Failed to fetch search results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search query..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <View style={styles.resultContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <Text style={styles.resultTitle}>{item.title}</Text>
            <Text style={styles.resultUrl}>{item.link}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  resultContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultUrl: {
    fontSize: 14,
    color: '#007BFF',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default SearchComponent;
