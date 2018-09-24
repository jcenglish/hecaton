import { createMaterialTopTabNavigator } from 'react-navigation'

import { PeriodScreen, StudentsScreen } from '../screens'
import { connect } from 'react-redux'

export default createMaterialTopTabNavigator(
  {
    Class: {
      screen: PeriodScreen
    },
    Students: {
      screen: StudentsScreen
    }
  },
  { initialRouteName: 'Class' }
)
