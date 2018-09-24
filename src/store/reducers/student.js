import studentList from './students'
/* ACTION TYPES AND CREATORS */
const GOT_STUDENTS = 'GOT_STUDENTS'

const gotStudents = students => ({
  type: GOT_STUDENTS,
  students
})

// /* THUNK CREATORS */
export const getStudents = () => dispatch => {
  try {
    dispatch(gotStudents(studentList))
  } catch (err) {
    console.error('Get students did not succeed', err)
  }
}

const initialState = {
  list: []
}

/* REDUCER */
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_STUDENTS: {
      return {
        ...state,
        list: action.students
      }
    }
    default: {
      return state
    }
  }
}
