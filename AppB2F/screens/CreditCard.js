import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const CreditCard = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const goToHome = () => {
    navigation.navigate("Accueil");
  };
  const goToProfil = () => {
    navigation.navigate("Profil");
  };
  const goToMap = () => {
    navigation.navigate("Map");
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>This is the CreditCard Screen</Text>
        <Button onPress={openModal} title="Ouvre le Modal" />
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Modal Content</Text>
            <Button onPress={closeModal} title="Close Modal" />
          </View>
        </View>
      </Modal>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome5
            name="shopping-basket"
            size={32}
            color="black"
            onPress={goToFood}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="map-marker"
            size={32}
            color="black"
            onPress={goToMap}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="home" size={32} color="black" onPress={goToHome} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="credit-card-alt" size={28} color="#EF8536" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons
            name="person"
            size={32}
            color="black"
            onPress={goToProfil}
          />
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2",
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
    marginBottom: 10,
  },
});

export default CreditCard;
