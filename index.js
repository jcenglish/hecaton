/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import * as React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'
import App from './src/App'
import { Provider as StoreProvider } from 'react-redux'
import store from './src/store'

export default function Main() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main)
