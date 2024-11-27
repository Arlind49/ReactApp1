import {AboutStackNavigator} from "./StackNavigator";
import BottomTabNavigator from "./TabNavigation";
import {createDrawerNaigator} from "./TabNavigation";



const Drawer = createDrawerNaigator();

const DrawerNavigator = () => {
    return(
        <Drawer.DrawerNavigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}></Drawer.Screen>
            <Drawer.Screen name="About" component={AboutStackNavigator}></Drawer.Screen>

        </Drawer.DrawerNavigator>
    )

}
export default DrawerNavigator; 