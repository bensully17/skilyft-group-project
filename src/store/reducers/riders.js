import { ADD_RIDER, CHANGE_DEST, SET_DATE, SWITCH_DRIVE, PICK_IMAGE } from '../actions/actionTypes'

const initialState = {
  drive: false,
  departing: new Date(),
  destination: undefined,
  imageUrl: null,
  userName: null,
  firstName: null,
  lastName: null,
  vehicle: null,
  photoUri: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case PICK_IMAGE:
        return {
          ...state,
          photoUri: action.image
        }
      case ADD_RIDER:
        return {
          ...state,

        }
      case CHANGE_DEST:
        return {
          ...state,
          destination: event
        }
      case SET_DATE:
        return {
          ...state,
          departing: newDate
        }
      case SWITCH_DRIVE:
        return {
          ...state,
          drive: !state.drive
        }
    default:
      return state
  }
}

export default reducer