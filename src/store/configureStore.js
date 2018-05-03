import { createStore, combineReducers } from 'redux'

import ridersReducer from './reducers/root'

const rootReducer = combineReducers({
  riders: ridersReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore