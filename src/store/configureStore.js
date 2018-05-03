import { createStore, combineReducers } from 'redux'

import ridersReducer from './reducers/riders'

const rootReducer = combineReducers({
  riders: ridersReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore