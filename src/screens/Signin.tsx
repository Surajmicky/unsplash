import {
  Image,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {login} from '../Redux/action';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handlelogginUser(data) {
    console.log(data);
    dispatch(login(data));
  }
  const handleSubmit = async () => {
    try {
      console.log('clicked');
      let formData = {email, password};
      let checkLogin = LoginCheck(formData);
      checkLogin.then(res => {
        if (res) {
          handlelogginUser(res);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
//function to check if user has registered making fetch request to server and checking with mongodb database
  async function LoginCheck(data) {
    try {
      let res = await fetch(
        'https://bright-mite-bell-bottoms.cyclic.app/signin',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      res = await res.json();
      console.log(res);
      if (res.token) {
        return res;
      } else {
        Alert.alert('Wrong Credentials');
      }
    } catch (error) {
      return error;
    }
  }
  return (
    <ScrollView>
      <View style={styles.header}>
        <Image
          style={styles.header_logo}
          source={require('../assets/unsplash.png')}
        />
        <Text style={styles.large_text}>Login</Text>
        <Text style={styles.small_text}>Welcome back.</Text>
      </View>

      {/* //form */}
      <View style={styles.form}>
        <View>
          <Text style={{color: '#434242'}}>Email</Text>
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View>
          <Text style={{color: '#434242'}}>Password</Text>
          <TextInput
            value={password}
            style={styles.input}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.already_have_account}>
        <Text style={{marginLeft: 20, color: '#434242'}}>
          {' '}
          Don't have an Account ?
        </Text>
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={{textDecorationLine: 'underline', color: 'grey'}}>
          Join Unsplash
        </Text>
      </View>
    </ScrollView>
  );
};
export default Signin;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    alignItems: 'center',
  },

  header_logo: {
    width: 80,
    height: 80,
    marginTop: 50,
  },
  large_text: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'black',
    color: '#434242',
  },
  small_text: {
    fontSize: 15,
    color: '#434242',
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
  input: {
    borderWidth: 1,
    width: 300,
    marginVertical: 10,
    borderRadius: 4,
    color: '#434242',
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
