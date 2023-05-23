import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderShownContext } from "@react-navigation/elements";
import Accueil from "./screens/Accueil";
import Modal from "./screens/Modal";
import CreditCard from "./screens/CreditCard";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Group screenOptions={{ animation: "fade"}}>
             <Stack.Screen name="Accueil" component={Accueil} />
             <Stack.Screen name="CreditCard" component={CreditCard} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}} >
        <Stack.Screen name="Modal" component={Modal} />
        </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
