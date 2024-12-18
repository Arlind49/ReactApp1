import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Detail=({navigaion})=>{
    return(
        <View>
            <Text>Welcome to Dt screen</Text>
            <Button
            title="Go to the other page"
            onPress={()=>navigaion.navigate("Home")}
            />
        </View>
    )

}

export default Detail;