import axios from 'axios'

/* ACTION TYPES AND CREATORS */
const ADDED_STUDENT = 'ADDED_STUDENT'
const DELETED_STUDENT = 'DELETED_STUDENT'
const GOT_STUDENTS = 'GOT_STUDENTS'
const GOT_STUDENT = 'GOT_STUDENT'
const REQUESTED_STUDENT = 'REQUESTED_STUDENT'
const REQUESTED_STUDENTS = 'REQUESTED_STUDENTS'

const addedStudent = student => ({
  type: ADDED_STUDENT,
  student
})

const deletedStudent = studentId => ({
  type: DELETED_STUDENT,
  studentId
})

const gotStudents = students => ({
  type: GOT_STUDENTS,
  students
})

const gotStudent = student => ({
  type: GOT_STUDENT,
  student
})

const requestedStudent = () => ({
  type: REQUESTED_STUDENT
})

const requestedStudents = () => ({
  type: REQUESTED_STUDENTS
})

// /* THUNK CREATORS */
export const getStudents = () => dispatch => {
  dispatch(requestedStudents())
  try {
    axios.get('/api/students').then(students => dispatch(gotStudents(students)))
  } catch (err) {
    console.error('Get students did not succeed', err)
  }
}

// export const addStudent = student => dispatch => {
//   axios
//     .post('/api/students', student)
//     .then(res => dispatch(addedStudent(res.data)))
// }

// export const deleteStudent = studentId => dispatch => {
//   axios
//     .delete(`/api/students/${studentId}`)
//     .then(() => dispatch(deletedStudent(studentId)))
// }

// export const getStudent = studentId => dispatch => {
//   dispatch(requestedStudent())
//   try {
//     axios
//       .get(`/api/students/${studentId}`)
//       .then(res => dispatch(gotStudent(res.data)))
//   } catch (err) {
//     console.error('Get Student did not succeed', err)
//   }
// }

const initialState = {
  list: [],
  isFetching: false,
  selectedStudent: {}
}

/* REDUCER */
export default (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_STUDENT: {
      return {
        ...state,
        isFetching: true
      }
    }
    case REQUESTED_STUDENTS: {
      return {
        ...state,
        isFetching: true
      }
    }
    case GOT_STUDENTS: {
      return {
        ...state,
        list: action.students,
        isFetching: false
      }
    }
    case GOT_STUDENT: {
      return {
        ...state,
        selectedStudent: action.student,
        isFetching: false
      }
    }
    case ADDED_STUDENT: {
      return {
        ...state,
        list: [...state.list, action.student]
      }
    }
    case DELETED_STUDENT: {
      return {
        ...state,
        list: state.list.filter(
          student => student.id !== Number(action.studentId)
        )
      }
    }
    default: {
      return state
    }
  }
}
