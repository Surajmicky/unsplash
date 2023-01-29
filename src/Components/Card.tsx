import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
let { width } = Dimensions.get('window');

const Card = ({ description, profile_img, name, image }) => {
  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{ uri: profile_img }} />
        <Text style={{ marginLeft: 10, fontSize: 13 }}> {name}</Text>
      </View>
      <Text style={{ fontSize: 12, marginHorizontal: 14, marginBottom: 6 }}>
        {description}
      </Text>
      <View style={styles.body}>
        <Image style={styles.main_Image} source={{ uri: image }} />
      </View>
    </SafeAreaView>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: '98%',
    alignSelf: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 25,
    fontSize: 25,
  },

  body: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_Image: {
    width: width * 0.9,
    //    borderRadius:10,
    height: width * (Math.random() * (1.5 - 1) + 1),
  },
});
