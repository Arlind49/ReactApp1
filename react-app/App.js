import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExerciseScreen from './ExerciseScreen';
import TestingApp from './TestingApp';
import ButtonScreen from './ButtonScreen';
import MenuScreen from './Menu/MenuScreen';
import StudentsScreen from './StudentsScreen';
import BoxScreen from './Menu/BoxScreen';
import DrawerNavigator from './DrawNavigator';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start sssworking on your apsdasdsp! Testin</Text>
      <StatusBar style="auto" />
      <ExerciseScreen></ExerciseScreen>
      {/* <TestingApp></TestingApp>
      <ButtonScreen></ButtonScreen>
      <MenuScreen></MenuScreen> */}
      <StudentsScreen></StudentsScreen>
<NavigationContainer>
  <DrawerNavigator/>
</NavigationContainer>

    </View>
  );
}


const navigator = createStackNavigator({
  // Main: MainScreen,
  // Test: TestScreen,
  Exercise: ExerciseScreen,
  Button: ButtonScreen,
  Menu: MenuScreen,
  Box: BoxScreen
},
{
  initialRouteName: 'Menu',
  dafaultNavigationOptions: {
    title: 'App'
  }
}
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});