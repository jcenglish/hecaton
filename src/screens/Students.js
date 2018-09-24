import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { Student } from '../components'
import { getStudents } from '../store'
import { connect } from 'react-redux'
import students from '../store/reducers/students'

class StudentsScreen extends Component {
  render() {
    return (
      <ScrollView>
        {students.map(student => (
          <Student
            key={student.id}
            firstName={student.firstName}
            lastName={student.lastName}
          />
        ))}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    students: state.students.list
  }
}

export default connect(mapStateToProps)(StudentsScreen)
