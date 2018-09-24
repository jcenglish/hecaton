import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect, Provider as StoreProvider } from 'react-redux'
import { getEmployees, getStudents, getGuardians } from '../store'

class Period extends Component {
  componentDidMount() {
    this.props.gotEmployees()
    this.props.gotStudents()
    this.props.gotGuardians()
  }
  render() {
    return <View />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotStudents: () => dispatch(getStudents),
    gotGuardians: () => dispatch(getGuardians),
    gotEmployees: () => dispatch(getEmployees)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Period)
