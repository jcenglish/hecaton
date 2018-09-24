import { createMaterialTopTabNavigator } from 'react-navigation'
import { ClassesScreen, PeriodScreen, StudentsScreen } from '../screens'

export default createMaterialTopTabNavigator(
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
