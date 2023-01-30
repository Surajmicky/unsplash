/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Routes from './src/Components/Routes';


import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import {store} from './src/Redux/store'

function App(): JSX.Element {
 
  return (
    <Provider store={store}>
    <SafeAreaProvider>
     <Routes/>
    </SafeAreaProvider>
   
    </Provider>
  );
}

export default App;
