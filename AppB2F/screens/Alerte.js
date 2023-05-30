import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Alerte = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#EF8536" />
        </TouchableOpacity>
        <Text style={styles.alertText}>Alerte déclenchée !</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default Alerte;
