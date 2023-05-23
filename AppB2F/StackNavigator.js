import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderShownContext } from "@react-navigation/elements";
import Accueil from "./screens/Accueil";
import Second from "./screens/CreditCard";
import Modal from "./screens/Modal";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
             <Stack.Screen name="Accueil" component={Accueil} />
             <Stack.Screen name="Second" component={Second} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}} >
        <Stack.Screen name="Modal" component={Modal} />
        </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
