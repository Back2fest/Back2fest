import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, SafeAreaView, Button} from "react-native";

const Accueil = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <Text>This is Home</Text>
            <Button onPress= {() => navigation.navigate("Second")} title="Va sur le deuxieme ecran" />
        </SafeAreaView>
    )
}

export default Accueil