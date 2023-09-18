import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import ScreenOne from './components/ScreenOne';



export default function App() {

  const Drawer = createDrawerNavigator();
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="ScreenOne" component={ScreenOne} />
        </Drawer.Navigator>
      </NavigationContainer>
      <Text style={styles.donacion}>haz tu donacion PAYPAL</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donacion: {
    backgroundColor: "blue",
    textAlign: "center",
    padding: 12,
    fontSize: 20
  }
});
