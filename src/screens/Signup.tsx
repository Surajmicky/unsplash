import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text>hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
const styles = StyleSheet.create({
  container: {},
  scroll: {},
  header: {},
});
