import { useNavigation } from "@react-navigation/core";
import MapView, { Marker } from "react-native-maps";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Map = () => {
  const navigation = useNavigation();
  const [mapRegion, setMapRegion] = useState({
    latitude: 43.61150028375979,
    longitude: 3.873996852490878,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredButtons, setFilteredButtons] = useState([]); // Initialise avec une valeur vide
  const [modalVisible, setModalVisible] = useState(false);

  const buttons = [
    {
      label: "Camping",
      icon: <FontAwesome5 name="campground" size={16} color="black" />,
    },
    {
      label: "Toilettes",
      icon: <FontAwesome5 name="toilet" size={16} color="black" />,
    },
    { label: "Stand", icon: <Entypo name="shop" size={24} color="black" /> },
  ];

  const goToHome = () => {
    navigation.navigate("Accueil");
  };

  const goToProfil = () => {
    navigation.navigate("Profil");
  };

  const goToCard = () => {
    navigation.navigate("CreditCard");
  };

  const goToFood = () => {
    navigation.navigate("Food");
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    userLocation();
    setFilteredButtons(buttons); // Initialise le state avec la valeur des boutons
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

  const handleSearch = (text) => {
    setSearchText(text);
    if (text === "") {
      setFilteredButtons(buttons);
    } else {
      const filtered = buttons.filter((button) =>
        button.label.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredButtons(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Le Festival" />
        </MapView>
        <View style={styles.rectangle}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher un lieu"
              value={searchText}
              onChangeText={handleSearch}
            />
          </View>
          <View style={styles.buttonContainer}>
            {filteredButtons.map((button, index) => (
              <TouchableOpacity style={styles.button} key={index}>
                <Text style={styles.buttonText}>{button.label}</Text>
                {button.icon}
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.buttonSOS} onPress={openModal}>
            <Text style={styles.bigbuttonSOSText}>SOS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Localisation d'urgence</Text>
            <Text style={styles.modalTextdesc}>
              Vous avez appuyé sur le bouton SOS réservé aux urgences, un
              message d’alerte sera envoyé aux services de sécurité et de santé,
              souhaitez-vous continuer ?
            </Text>
            <View style={styles.buttonContainerMod}>
              <TouchableOpacity style={styles.buttonYes}>
                <Text style={styles.buttonTextmod}>Oui</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNo} onPress={closeModal}>
                <Text style={styles.buttonTextmod}>Non</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconContainer} onPress={goToFood}>
          <FontAwesome5 name="shopping-basket" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="map-marker" size={32} color="#EF8536" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={goToHome}>
          <Ionicons name="home" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={goToCard}>
          <FontAwesome name="credit-card-alt" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={goToProfil}>
          <Ionicons name="person" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    position: "absolute",
    top: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    position: "relative",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 250,
    position: "relative",
    top: -50,
  },
  rectangle: {
    position: "absolute",
    bottom: -100,
    zIndex: 100,
    width: "100%",
    height: 420,
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2",
    zIndex: 200,
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 25,
    borderRadius: 20,
    height: 65,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 100,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonSOS: {
    backgroundColor: "#EF8536",
    borderRadius: 30,
    padding: 20,
    height: 90,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  bigbuttonSOSText: {
    fontSize: 20,
    marginTop: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  modalTextdesc: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonYes: {
    borderWidth: 2,
    borderColor: "#EF8536",
    borderRadius: 30,
    padding: 10,
    marginLeft: 50,
  },
  buttonNo: {
    borderWidth: 2,
    borderColor: "#EF8536",
    borderRadius: 30,
    padding: 10,
    marginRight: 50,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    paddingRight: 5,
  },
  buttonTextmod: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonContainerMod: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    marginTop: 50,
  },
});

export default Map;
