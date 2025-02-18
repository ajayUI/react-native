// src/components/SearchComponent.tsx
// import React, { useState } from 'react';

// import { View, TextInput, Button, FlatList, Image, StyleSheet, ActivityIndicator, Text } from 'react-native';
// import apiService from '../services/apiService';
// import { ImageResult } from '../types';


// const SearchComponent = () => {
//   const [query, setQuery] = useState('');
//   const [images, setImages] = useState<ImageResult[]>([]);
//   const [loading, setLoading] = useState(false);
//   Renamed the state variable to avoid shadowing
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);

//   const searchImages = async () => {
//     setLoading(true);
//     setErrorMsg(null); // Use the new state variable name
//     try {
//       const results = await apiService.searchImages(query, 'lG64N6ET0tnFDAOiNCGkX1KCEattRQ8tC09Txr--pg4');
//       setImages(results);
//     } catch (err) { // Renamed the catch block parameter
//       setErrorMsg('Failed to fetch images');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search for images..."
//         value={query}
//         onChangeText={setQuery}
//       />
//       <Button title="Search" onPress={searchImages} />
//       {loading && <ActivityIndicator size="large" />}
//       {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
//       <FlatList
//         data={images}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: item.urls.thumb }} style={styles.image} />
//             <Text>{item.alt_description}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   imageContainer: {
//     marginBottom: 10,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
// });

// export default SearchComponent;
