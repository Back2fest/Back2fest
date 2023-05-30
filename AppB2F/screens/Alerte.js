import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Alerte = () => {
  const navigation = useNavigation();
  const [mapRegion, setMapRegion] = useState({
    latitude: 43.61150028375979,
    longitude: 3.873996852490878,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [errorMsg, setErrorMsg] = useState("");

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    userLocation();
  }, []);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission refusée");
      return;
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#EF8536" />
        </TouchableOpacity>
        <Text style={styles.alertText}>Alerte déclenchée !</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Votre Position" />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  backButton: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#EF8536",
    borderRadius: 20,
    padding: 5,
  },
  alertText: {
    fontSize: 18,
    paddingLeft: 43,
    fontWeight: "bold",
    textAlign: "center",
  },
  mapContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 30,
    marginHorizontal: 30,
    marginTop: 20,
    height: "25%",
  },
  map: {
    width: "100%",
    height: "100%%",
    borderRadius: 30,
  },
});

export default Alerte;
