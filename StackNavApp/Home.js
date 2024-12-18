import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home=({navigaion})=>{
    return(
        <View>
            <Text>Welcome to home screen</Text>
            <Button
            title="Go to the other page"
            onPress={()=>navigaion.navigate("Detail")}

            />
        </View>
    )

}
 export default Home;