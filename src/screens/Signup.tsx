import {
  Image,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signup = ({ navigation }) => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try{

      let formData= {firstName,lastName,email,userName,password};
      let res= await fetch('https://bright-mite-bell-bottoms.cyclic.app/signup' , {
        method:'POST' ,
        body:JSON.stringify(formData) ,
        headers:{
            'Content-Type':'application/json',
            Accept: 'application/json',
        }
        })
        res= await res.json();
        console.log(res);
        if(res.message=='User created successfully'){
        Alert.alert('sucessfully sign up !!..')
        navigation.navigate('Signin')
        }else{
            throw new Error('email already exists')
        }
 
    }catch(err){
       console.log(err)
    }

  }
  

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.header}>
        <Image
          style={styles.header_img}
          source={{
            uri: 'https://images.unsplash.com/photo-1674407728563-f30774195b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Image
          style={styles.header_logo}
          source={require('../assets/unsplash.png')}
        />
        <Text style={styles.large_text}>Creation starts here</Text>
        <Text style={styles.small_text}>
          Access 4,766,189 free,high-resolution photos you can't find anywhere
          else
        </Text>
      </View>
      <View style={styles.body_container}>
        <Text style={{ fontSize: 30, flex: 1, fontWeight: 'bold' }}>
          Join Unsplash
        </Text>
        <View style={styles.already_have_account}>
          <Text>Already have an Account</Text>
          <Text
            onPress={() => navigation.navigate('Signin')}
            style={{ textDecorationLine: 'underline', color: 'grey' }}
          >
            Login
          </Text>
        </View>
      </View>
      {/* //form */}
      <View style={styles.form}>
        <View style={styles.full_name}>
          <View>
            <Text>First Name</Text>
            <TextInput
              style={styles.input_name}
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
          </View>

          <View>
            <Text>Last Name</Text>
            <TextInput
              value={lastName}
              style={styles.input_name}
              onChangeText={text => setLastName(text)}
            />
          </View>
        </View>

        <View>
          <Text>Email</Text>
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={text => setEmail(text)}
          />
        </View>

        <View>
          <Text>Username</Text>
          <TextInput
            value={userName}
            style={styles.input}
            onChangeText={text => setUserName(text)}
          />
        </View>

        <View>
          <Text>Password</Text>
          <TextInput
            value={password}
            style={styles.input}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: 'white' }}>Join</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginBottom: 20,
          alignContent: 'center',
          width: '98%',
        }}
      >
        <Text style={{ marginLeft: 20 }}> By joining, you agree to the </Text>
        <Text style={{ textDecorationLine: 'underline' }}>Terms</Text>
        <Text> and </Text>
        <Text style={{ textDecorationLine: 'underline', marginLeft: 20 }}>
          Privacy Policy
        </Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    alignItems: 'center',
  },
  header_img: {
    width: '98%',
    height: 250,
  },
  header_logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 20,
    top: 50,
  },
  large_text: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    top: 100,
    color: 'white',
    left: 20,
  },
  small_text: {
    position: 'absolute',
    top: 160,
    color: 'white',
    fontSize: 15,
    left: 5,
    textAlign: 'center',
  },
  body_container: {
    alignItems: 'center',
    paddingTop: 16,
  },
  already_have_account: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 20,
  },
  form: {
    alignItems: 'center',
    width: '95%',
  },
  full_name: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    width: 300,
    marginVertical: 10,
    borderRadius: 4,
  },
  input_name: {
    borderWidth: 1,
    width: 150,
    marginVertical: 10,
    borderRadius: 4,
  },
  button: {
    width: 300,
    backgroundColor: 'black',
    color: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
