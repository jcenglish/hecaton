const students = []
const WAIT = 1000

export const getStudents = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(students)
    }, WAIT)
  })
}

export const getStudent = studentId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(students)
    }, WAIT)
  })
}
