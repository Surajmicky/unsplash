/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Home from './src/screens/Home';
import Unsplash from './src/screens/Unsplash';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
    {/* <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Unsplash" component={Unsplash}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer> */}
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false,drawerPosition:'right',  }} initialRouteName="Signup">
      <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Signin" component={Signin} />
        
      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
