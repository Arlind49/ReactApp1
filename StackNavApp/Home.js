import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home=({navigaion})=>{
    return(
        <View>
            <Text>Welcome to home screen</Text>
            <Button
            title="Go to Detail"
            onPress={()=>navigaion.navigate("Detail")}

            />
             <Button
            title="Go to Home"
            onPress={()=>navigaion.navigate("Home")}

            />
        </View>
    )

}
 export default Home;