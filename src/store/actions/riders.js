import { ADD_RIDER, CHANGE_DEST, SET_DATE, SWITCH_DRIVE } from './actionTypes'

export const addRider = () => {
  return {
    type: ADD_RIDER
  }
}

export const changeDest = (event) => {
  return {
    type: CHANGE_DEST,
    place: event
  }
}

export const setDate = (newDate) => {
  return {
    type: SET_DATE,
    departing: newDate
  }
}

export const switchDrive = () => {
  return {
    type: SWITCH_DRIVE
  }
}