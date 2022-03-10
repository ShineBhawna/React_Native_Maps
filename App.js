import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Permission, PERMISSION_TYPE} from './src/AppPermission';
import MapView, {Polyline, Marker} from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';

const uttamNagar = {
  latitude: 28.6196,
  longitude: 77.0550,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

const dwarkaMor = {
  latitude: 28.6193,
  longitude:77.0333 ,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

export default class App extends Component {
  componentDidMount () {
    Permission.checkPermission(PERMISSION_TYPE.location)
}

  render() {

    return (
      <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={uttamNagar}
        >
       <MapViewDirections
          origin={uttamNagar}
          destination={dwarkaMor}
          apikey={"AIzaSyCTBcWnuFdliL3pzK8FyhAEC7KapHjjOHM"} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
         <Polyline
        coordinates={[uttamNagar, dwarkaMor]} //specify our coordinates
        strokeColor={"#000"}
        strokeWidth={3}
        lineDashPattern={[2]}
    />
      
        <Marker coordinate={uttamNagar} />
        <Marker pinColor='green' coordinate={dwarkaMor} />
        <Marker pinColor='purple'
        coordinate={{
        latitude: 28.6218,
        longitude: 77.0558
    }} // UTTAM NAGAR WEST METRO Coordinates
  />
        </MapView>

</View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});