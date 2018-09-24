import axios from 'axios'

/* ACTION TYPES AND CREATORS */
const ADDED_EMPLOYEE = 'ADDED_EMPLOYEE'
const DELETED_EMPLOYEE = 'DELETED_EMPLOYEE'
const GOT_EMPLOYEES = 'GOT_EMPLOYEES'
const GOT_EMPLOYEE = 'GOT_EMPLOYEE'
const REQUESTED_EMPLOYEE = 'REQUESTED_EMPLOYEE'
const REQUESTED_EMPLOYEES = 'REQUESTED_EMPLOYEES'

const addedEmployee = employee => ({
  type: ADDED_EMPLOYEE,
  employee
})

const deletedEmployee = employeeId => ({
  type: DELETED_EMPLOYEE,
  employeeId
})

const gotEmployees = employees => ({
  type: GOT_EMPLOYEES,
  employees
})

const gotEmployee = employee => ({
  type: GOT_EMPLOYEE,
  employee
})

const requestedEmployee = () => ({
  type: REQUESTED_EMPLOYEE
})

const requestedEmployees = () => ({
  type: REQUESTED_EMPLOYEES
})

// /* THUNK CREATORS */
export const getEmployees = () => dispatch => {
  dispatch(requestedEmployees())
  try {
    axios
      .get('/api/employees')
      .then(employees => dispatch(gotEmployees(employees)))
  } catch (err) {
    console.error('Get EMPLOYEEs did not succeed', err)
  }
}

// export const addEMPLOYEE = EMPLOYEE => dispatch => {
//   axios
//     .post('/api/EMPLOYEEs', EMPLOYEE)
//     .then(res => dispatch(addedEMPLOYEE(res.data)))
// }

// export const deleteEMPLOYEE = EMPLOYEEId => dispatch => {
//   axios
//     .delete(`/api/EMPLOYEEs/${EMPLOYEEId}`)
//     .then(() => dispatch(deletedEMPLOYEE(EMPLOYEEId)))
// }

// export const getEMPLOYEE = EMPLOYEEId => dispatch => {
//   dispatch(requestedEMPLOYEE())
//   try {
//     axios
//       .get(`/api/EMPLOYEEs/${EMPLOYEEId}`)
//       .then(res => dispatch(gotEMPLOYEE(res.data)))
//   } catch (err) {
//     console.error('Get EMPLOYEE did not succeed', err)
//   }
// }

const initialState = {
  list: [],
  isFetching: false,
  selectedEmployee: {}
}

/* REDUCER */
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_EMPLOYEE: {
      return {
        ...state,
        isFetching: true
      }
    }
    case REQUESTED_EMPLOYEES: {
      return {
        ...state,
        isFetching: true
      }
    }
    case GOT_EMPLOYEES: {
      return {
        ...state,
        list: action.employees,
        isFetching: false
      }
    }
    case GOT_EMPLOYEE: {
      return {
        ...state,
        selectedEmployee: action.employee,
        isFetching: false
      }
    }
    case ADDED_EMPLOYEE: {
      return {
        ...state,
        list: [...state.list, action.employee]
      }
    }
    case DELETED_EMPLOYEE: {
      return {
        ...state,
        list: state.list.filter(
          employee => employee.id !== Number(action.employeeId)
        )
      }
    }
    default: {
      return state
    }
  }
}
