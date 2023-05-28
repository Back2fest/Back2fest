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
  Image,
  ScrollView,
  FlatList,
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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          source={item.image}
          style={[
            styles.carouselImage,
            { backgroundColor: item.backgroundColor },
          ]}
        />
        <View style={styles.overlay} />
        <Text style={[styles.carouselTitle, { textAlign: "center" }]}>
          {item.title}
        </Text>
      </View>
    );
  };


  const carouselData1 = [
    {
      id: "1",
      title: "Daft Punk",
      image: require("../Img/Daft-punk.png"),
      backgroundColor: "#47719B",
    },
    {
      id: "2",
      title: "Burna Boy",
      image: require("../Img/Burna-Boy.png"),
      backgroundColor: "#F4C550",
    },
    {
      id: "3",
      title: "Central Cee",
      image: require("../Img/Central-cee.png"),
      backgroundColor: "#4DB148",
    },
    {
      id: "4",
      title: "BTS",
      image: require("../Img/BTS.png"),
      backgroundColor: "#",
    },
    {
      id: "5",
      title: "Cat Dealers",
      image: require("../Img/Cat-dealers.png"),
      backgroundColor: "#A8A8A8",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.notificationContainer}>
        <View style={styles.circle}>
          <Image
            source={require("../Img/PhotoProfil.jpeg")}
            style={styles.imagecircle}
          />
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <Text style={[styles.carouselTitle, { marginTop: 20 }]}>
          Concert pendant le Festival
        </Text>
        <FlatList
          data={carouselData1}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
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
          <Ionicons name="home" size={32} color="#EF8536" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={goToCreditCard}>
          <FontAwesome name="credit-card-alt" size={28} color="black" />
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
    paddingTop: StatusBar.currentHeight,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 18,
    marginRight: 10,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#EF8536",
    justifyContent: "center",
    alignItems: "center",
  },
  imagecircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  notificationIcon: {
    marginRight: 10,
  },
  filterIcon: {
    marginLeft: 10,
    color: "#B3B3B3",
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  carouselItem: {
    marginRight: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 236,
    height: 187,
    backgroundColor: "black",
    opacity: 0.4,
    borderRadius: 10,
  },
  carouselImage: {
    width: 236,
    height: 187,
    borderRadius: 10,
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
});

export default Accueil;
