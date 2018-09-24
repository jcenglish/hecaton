/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { RootStack } from './navigation'
import { connect } from 'react-redux'
import { loadData } from './store'

class App extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }
  render() {
    return <RootStack />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadInitialData: () => dispatch(loadData())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
