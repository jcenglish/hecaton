/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { connect, Provider as StoreProvider } from 'react-redux'
import store, { getEmployees, getStudents, getGuardians } from './store'
import { Provider as PaperProvider } from 'react-native-paper'
import RootStack from './navigation/RootStack'

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <RootStack />
        </PaperProvider>
      </StoreProvider>
    )
  }
}
