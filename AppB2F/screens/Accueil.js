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
        <View style={styles.overlaycarou} />
        <Text style={styles.carouselArtiste}>
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
      backgroundColor: "#47719B",
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
      <View style={styles.content}>
        <View style={styles.actualité}>
          <Image style={styles.actuImg} source={require("../Img/BTS.jpeg")} />
          <View style={styles.overlayactu} />
          <View style={styles.timeCircle}>
            <Text style={styles.timeText}>5</Text>
            <Text style={styles.timeText}>min</Text>
          </View>
        </View>
        <View style={styles.actuInfo}>
          <Text style={styles.actuTxt}>Prochain Concert : BTS</Text>
        </View>
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
        <TouchableOpacity style={styles.mapContainer} onPress={goToMap}>
          <View style={styles.mapShadow}>
            <Image source={require("../Img/Map.png")} style={styles.mapImage} />
          </View>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 25,
    flex: 1,
    marginBottom: 28, // Ajout de cette ligne pour supprimer l'espace entre le carousel et la map
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  carouselArtiste: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: "60%",
    left: "53%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: "white",
  },
  carouselItem: {
    marginRight: 10,
    position: "relative",
  },
  overlaycarou: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 236,
    height: 187,
    backgroundColor: "black",
    opacity: 0.4,
    borderRadius: 10,
  },
  overlayactu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.4,
  },
  carouselImage: {
    width: 236,
    height: 187,
    borderRadius: 10,
  },
  mapContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  mapImage: {
    width: 340,
    height: 155,
    borderRadius: 20,
  },
  actualité: {
    marginTop: 25,
    width: 340,
    height: 130,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 0,
    borderColor: "black",
    alignSelf: "center",
    overflow: "hidden",
  },
  actuImg: {
    width: "100%",
    height: "125%",
    resizeMode: "cover",
    borderRadius: 20,
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
  actuInfo: {
    width: 340,
    height: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
  },
  actuTxt: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 3,
  },
  timeCircle: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#EF8536",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Accueil;
