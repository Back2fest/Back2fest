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
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Alerte = () => {
  const navigation = useNavigation();
  const [mapRegion, setMapRegion] = useState({
    latitude: 43.61150028375979,
    longitude: 3.873996852490878,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [alertDateTime, setAlertDateTime] = useState("");

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    userLocation();
    setAlertDateTime(getCurrentDateTime());
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

    // Reverse geocoding to get approximate address
    let geocode = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    if (geocode.length > 0) {
      const address = `${geocode[0].name}, ${geocode[0].city}, ${geocode[0].region}, ${geocode[0].postalCode}, ${geocode[0].country}`;
      setUserAddress(address);
    }
  };

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, "PPP", { locale: fr });
    const formattedTime = format(currentDate, "p", { locale: fr });
    return `${formattedDate}, ${formattedTime}`;
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
      <View style={styles.alertInfo}>
        <View style={styles.info}>
          <Text style={styles.addressLabel}>
            Adresse approximative :{" "}
            <Text style={styles.addressInfo}>34 Rue Voltaire,</Text>
          </Text>
          {/* <Text style={styles.userAddress}>{userAddress}</Text> */}
          <Text style={styles.addressInfo}>34070, Montpellier, France</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.addressLabel}>Date et heure de l'alerte : </Text>
          <Text style={styles.dateInfo}>{alertDateTime}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.addressLabel}>
            Etat de l’alerte : <Text style={styles.alerteEtat}> ACTIVE</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSOS}>
            <Text style={styles.bigbuttonSOSText}>Scanner le bracelet pour envoyer</Text>
          </TouchableOpacity>
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
    height: "100%",
    borderRadius: 30,
  },
  alertInfo: {
    flex: 1,
    marginTop: 40,
    alignItems: "flex-start",
    marginLeft: 40,
  },
  addressLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
  },
  addressInfo: {
    fontSize: 16,
    color: "black",
    fontWeight: "normal",
    textAlign: "left",
  },
  dateInfo: {
    fontSize: 16,
    color: "black",
    fontWeight: "normal",
    textAlign: "left",
  },
  info: {
    paddingBottom: 35,
  },
  alerteEtat: {
    fontSize: 20,
    color: "#EF8536",
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 100,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonSOS: {
    backgroundColor: "#EF8536",
    borderRadius: 30,
    padding: 10,
    height: 90,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bigbuttonSOSText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Alerte;
