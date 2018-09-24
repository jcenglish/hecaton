import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Headline } from 'react-native-paper'
import { Student } from '../components'
import students from '../store/reducers/students'

export default class PeriodScreen extends Component {
  constructor() {
    super()
    this.state = {
      period: 1,
      list: []
    }

    this.changeClass = this.changeClass.bind(this)
  }

  changeClass() {
    let list = students.filter(student => student.period === this.state.period)
    this.setState({ list: list })
  }

  componentDidMount() {
    let period = 1
    setInterval(() => {
      console.log('bell')
      if (this.state.period === 4) {
        this.setState({ period: 1 })
        period = 1
      } else {
        this.setState({ period: period })
      }
      this.changeClass()
      period++
    }, 3000)
  }

  render() {
    console.log('list', students)
    return (
      <ScrollView>
        <Headline>Period {this.state.period}</Headline>
        {this.state.list.map(student => (
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
