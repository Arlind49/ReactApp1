const { View } = require("react-native-web")

const Product = (props) => {
return(
    
    <View style={StyleSheet.cardContainer}>
        <image source={{url: '${props.img}'}} style={styles.image}/>
        <View style={styles.cardDesc   }>
            <Text>{props.name}</Text>
            <Text>{props.desc}</Text>
            <View style={styles.footer}>
            <Text>Stock: {props.stock}</Text>
            <Text>Stock: {props.price}</Text>

            </View>

        </View>
    </View>  

)

}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginButton:10,
        borderRadius: 10,

    },
    img: {
        widht:250,
        height:100,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,

    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'


    }

})
export default Product;