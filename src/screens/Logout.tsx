import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

import {useDispatch} from 'react-redux';
import {logout} from '../Redux/action';
//function to logout and remove user detail from redux store.
const Logout = () => {
  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(logout());
  }
  return (
    <View style={{alignItems: 'center', marginTop: 100}}>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
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
