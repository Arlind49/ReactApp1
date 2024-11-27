import { Button, View } from "react-native-web"

const Home = ({navigation}) =>{
    return(
        <View style={style.container}>
              <Text>Welcome to Home Screen</Text>
              <Button title="Go to about screen" onPress={()=>navigation.navigate('About')}></Button>
              <Text>Drawer Navigation Button Functionally</Text>
              <Button title="Open Drawer" onPress={()=> navigation.openDrawer()}></Button>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    
    },
});
export default Home;