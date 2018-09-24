import employeeList from './employees'
import axios from 'axios'
/* ACTION TYPES AND CREATORS */
const GOT_EMPLOYEES = 'GOT_EMPLOYEES'

const gotEmployees = employees => ({
  type: GOT_EMPLOYEES,
  employees
})

// /* THUNK CREATORS */
export const getEmployees = () => dispatch => {
  try {
    dispatch(gotEmployees(employeeList))
  } catch (err) {
    console.error('Get employees did not succeed', err)
  }
}

const initialState = {
  list: []
}

/* REDUCER */
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_EMPLOYEES: {
      return {
        ...state,
        list: action.employees
      }
    }
    default: {
      return state
    }
  }
}
