/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { ClassesScreen, PeriodScreen, StudentsScreen } from './screens'

const RootStack = createMaterialTopTabNavigator(
  {
    Period: {
      screen: PeriodScreen
    },
    Students: {
      screen: StudentsScreen
    },
    Classes: {
      screen: ClassesScreen
    }
  },
  { initialRouteNam: 'Period' }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
