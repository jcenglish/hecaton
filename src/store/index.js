import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import students, { getStudents } from './reducers/student'
import guardians, { getGuardians } from './reducers/guardian'
import employees, { getEmployees } from './reducers/employee'

const reducer = combineReducers({
  students,
  guardians,
  employees
})

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)

export { getStudents, getGuardians, getEmployees }
export default store
