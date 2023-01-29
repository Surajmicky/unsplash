import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
const Unsplash = ({navigation}) => {
  const isAuthenticated = useSelector(state  => state.isAuthenticated);
useEffect(() => 
{setTimeout(()=>
 isAuthenticated ?  navigation.navigate('Home') : navigation.navigate("Signin")
,2000)},[])
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/unsplash_logo.png')}/>
      <Text style={styles.text}>Unsplash</Text>
    </View>
  )
}

export default Unsplash

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    image:{
        width:100,
        height:100
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
    }
})