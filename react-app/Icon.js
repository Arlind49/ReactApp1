import React from "react";
import { View,Text,StyleSheet } from "react-native-web";
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Icon = (props) =>{
    return(
        <View style={styles.iconContainer}>
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons name={props.name} size={27} color="red"></MaterialCommunityIcons>
            </View>
            <Text style={styles.IconText}>{props.IconText}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
iconWrapper: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 50,

},
iconContainer: {
    alignItems: 'center',
    width: 60,
    height: 60



    },
    IconText:{
        height: 20,
        fontWheight: '600'

    }
});
export default Icon;
