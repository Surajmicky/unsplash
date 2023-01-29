import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import {useSelector} from 'react-redux'
import { Avatar } from '@rneui/themed';
let { width } = Dimensions.get('window');

const Navbar = ({
  navigation,
  setText,
  fetchSearchResult,
  searchPage,
  text,
  setSearchImages,
  setSearchPage,
}) => {
  //check if user has logged in
  const isAuthenticated = useSelector(state  => state.isAuthenticated);
  // taking user name for avatar
  const user= useSelector(state => state.user);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.nav_logo}
          source={require('../assets/unsplash_logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.input}>
        <SearchBar
          containerStyle={styles.search_bar_container}
          inputContainerStyle={styles.search_bar_input}
          inputStyle={{ fontSize: 16 }}
          lightTheme={true}
          onEndEditing={() => {
            setSearchImages([]);
            setSearchPage(1);
            fetchSearchResult(searchPage, text);
          }}
          round={true}
          searchIcon={
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../assets/search.png')}
            />
          }
          placeholder="Search Images"
          onChangeText={text => setText(text)}
          value={text}
        />
      </View>
      <View style={{ width: 50, alignItems: 'center',flexDirection:'row',gap:10,paddingRight:10 }}>
      <Avatar
    size={35}
    rounded
    title= {isAuthenticated ? user.avatar_name:'login'}
    containerStyle={{ backgroundColor: "purple" }}
  />
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../assets/menu.png')}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    zIndex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  nav_logo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    position: 'relative',
  },
  input: {
    // flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    border: 'none',
    width:230
    
  },
  search_bar_container: {
    backgroundColor: 'white',
    border: 'none',
 
  },
  search_bar_input: {
    backgroundColor: '#dddcdc',
    fontSize: 10,
    borderRadius: 40,
    height: 50,
    
  },
});
