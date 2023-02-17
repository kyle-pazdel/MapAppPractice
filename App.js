import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {REACT_APP_TEST_ENV, REACT_APP_ACCESS_KEY} from '@env';

// MapboxGL.setAccessToken(REACT_APP_ACCESS_KEY);

const App = () => {
  const [coordinates] = useState([8.674252499999994, 9.0845755]);
  return (
    // <View style={styles.page}>
    //   <View style={styles.container}>
    //     <MapboxGL.MapView style={styles.map}>
    //       <MapboxGL.Camera zoomLevel={6} centerCoordinate={coordinates} />
    //       <MapboxGL.PointAnnotation coordinate={coordinates} />
    //     </MapboxGL.MapView>
    //   </View>
    // </View>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Test ENV: {REACT_APP_TEST_ENV} </Text>
      <Text>Test ENV: {REACT_APP_ACCESS_KEY} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
export default App;
