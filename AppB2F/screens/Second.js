import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

const Second = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>This is the second Screen</Text>
            <Button onPress={()=> navigation.navigate("Modal")} title="Ouvre le Modal" />
        </SafeAreaView>
    )
}

export default Second