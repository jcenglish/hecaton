import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Student } from './'

class Students extends Component {
  render() {
    const students = this.props.students
    return <View />
  }
}

export default Students
