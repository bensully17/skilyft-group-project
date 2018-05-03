import { ADD_RIDER, CHANGE_DEST, SET_DATE, SWITCH_DRIVE } from '../actions/actionTypes'

const initialState = {
  drive: false,
  departing: new Date(),
  destination: undefined,
  imageUrl: "https://s3-us-west-1.amazonaws.com/skilyft-photos/skilyft-ben.jpg",
  userName: "Ben",
  firstName: "Ben",
  lastName: "Sullivan",
  vehicle: "2011 range rover sport"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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