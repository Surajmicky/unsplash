/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Routes from './src/Components/Routes';




import { SafeAreaProvider } from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import {store} from './src/Redux/store'

function App(): JSX.Element {
 
  return (
    <Provider store={store}>
    
     <Routes/>
   
    </Provider>
  );
}

export default App;
