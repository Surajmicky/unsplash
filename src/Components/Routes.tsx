import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Signup';
import Signin from '../screens/Signin';
import Home from '../screens/Home';
import Unsplash from '../screens/Unsplash';
import Logout from '../screens/Logout';
const Drawer = createDrawerNavigator();
const Routes = () => {
    const isAuthenticated = useSelector(state  => state.isAuthenticated);
  return (
    
    
     <NavigationContainer>
    
        
        <Drawer.Navigator screenOptions={{ headerShown: false,drawerPosition:'right',  }} initialRouteName="Unsplash">
        {isAuthenticated ?
    (
            <>
      
      <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Unsplash" component={Unsplash}/>
    <Drawer.Screen name="Logout" component={Logout} />
   
    </>
    ) :(
     <>
       
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Unsplash" component={Unsplash}/>
      <Drawer.Screen name="Signin" component={Signin} />
      </>)}
      </Drawer.Navigator>
  </NavigationContainer>
      )}
  


   
  


export default Routes

const styles = StyleSheet.create({})