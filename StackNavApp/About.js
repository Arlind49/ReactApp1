import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const About=({navigaion})=>{
    return(
        <View>
            <Text>Welcome to About screen</Text>
            <Button
            title="Go to Detail page"
            onPress={()=>navigaion.navigate("Detail")}

            />
            <Button
            title="Go to Home"
            onPress={()=>navigaion.navigate("Home")}

            />
        </View>
    )

}
 export default About;