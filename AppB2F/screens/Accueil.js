import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Accueil = () => {
  const navigation = useNavigation();

  const goToCreditCard = () => {
    navigation.navigate("CreditCard");
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.notificationContainer}>
        <TouchableOpacity style={styles.circle} />
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
        <Text style={styles.searchText}>Rechercher</Text>
        <Ionicons name="filter" size={24} color="black" style={styles.filterIcon} />
      </View>
      <View style={styles.content}>
        <Text>This is Home</Text>
        <Button onPress={goToCreditCard} title="Va sur le deuxième écran" />
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome5
            name="shopping-basket"
            size={24}
            color="black"
            onPress={goToFood}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="map-marker"
            size={24}
            color="black"
            onPress={goToMap}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="home" size={24} color="#EF8536" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={goToCreditCard}>
          <FontAwesome name="credit-card-alt" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons
            name="person"
            size={24}
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
    paddingTop: StatusBar.currentHeight,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: StatusBar.currentHeight + 30,
    marginLeft: 25,
    marginRight: 25,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EF8536",
  },
  notificationIcon: {
    marginRight: 10,
  },
  searchBar: {
    marginTop: 40,
    flexDirection: "row",
    height: 65,
    marginHorizontal: 25,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    color:'#B3B3B3'
  },
  filterIcon: {
    marginLeft: 10,
    color: '#B3B3B3',
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

export default Accueil;
