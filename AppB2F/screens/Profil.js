import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Profil = () => {
  const navigation = useNavigation();

const goToHome = () =>{
    navigation.navigate("Accueil");
}
const goToCreditCard = () =>{
    navigation.navigate("CreditCard");
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>This is the profil Screen</Text>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome5 name="shopping-basket" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="home" size={24} color="black" onPress={goToHome}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="credit-card-alt" size={20} color="black" onPress={goToCreditCard}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person" size={24} color="#EF8536" />
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
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Profil;
