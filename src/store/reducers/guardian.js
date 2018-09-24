import guardianList from './guardians'
/* ACTION TYPES AND CREATORS */
const GOT_GUARDIANS = 'GOT_GUARDIANS'

const gotGuardians = guardians => ({
  type: GOT_GUARDIANS,
  guardians
})

// /* THUNK CREATORS */
export const getGuardians = () => dispatch => {
  try {
    dispatch(gotGuardians(guardianList))
  } catch (err) {
    console.error('Get guardians did not succeed', err)
  }
}

const initialState = {
  list: []
}

/* REDUCER */
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_GUARDIANS: {
      return {
        ...state,
        list: action.guardians
      }
    }
    default: {
      return state
    }
  }
}
