import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {REACT_APP_TEST_ENV, REACT_APP_ACCESS_KEY} from '@env';

MapboxGL.setAccessToken(REACT_APP_ACCESS_KEY);

const App = () => {
  const [coordinates] = useState([8.674252499999994, 9.0845755]);
  const renderAnnotations = () => {
    return (
      <MapboxGL.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={[8.51672, 12.00012]}>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'black',
            borderRadius: 50,
            borderColor: 'black',
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={6} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
          <>{renderAnnotations()}</>
        </MapboxGL.MapView>
      </View>
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
