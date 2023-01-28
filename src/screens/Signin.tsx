import { Image, ScrollView, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (

    <ScrollView style={styles.scroll}>
      <View style={styles.header}>
        <Image style={styles.header_logo} source={require('../assets/unsplash.png')} />
        <Text style={styles.large_text}>Login</Text>
        <Text style={styles.small_text}>Welcome back.</Text>
      </View>

      {/* //form */}
      <View style={styles.form}>
        <View>
          <Text>Email</Text>
          <TextInput
            value={email} style={styles.input}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            value={password} style={styles.input}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { }} >
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.already_have_account}><Text>     Don't have an Account ?</Text><Text style={{ color: 'blue' }}
          onPress={() => navigation.navigate('Signup')} style={{ textDecorationLine: "underline", color: 'grey' }}>Join Unsplash</Text></View>
    </ScrollView>

  );
};
export default Signin;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    alignItems: "center",
  },
  header_img: {
    width: "98%",
    height: 250,

  },
  header_logo: {
    width: 80,
    height: 80,
    marginTop:50,
  },
  large_text: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  small_text: {
    fontSize: 15,
    textAlign: "center",
  },
  body_container: {
    alignItems: "center",
    paddingTop: 16,

  },
  already_have_account: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 20,
  },
  form: {
    alignItems: 'center',
    width: "95%"
  },
  full_name: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "100%",
  },
  input: {
    borderWidth: 1,
    width: 300,
    marginVertical: 10,
    borderRadius:4,

  },
  input_name: {
    borderWidth: 1,
    width: 150,
    marginVertical: 10,
    borderRadius:4,

  },
  button: {
    width: 300,
    backgroundColor: 'black',
    color: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  }
});



