import { combineReducers } from 'redux'

// Reducer imports
import indexReducer from './indexReducer'

export default combineReducers({
   index: indexReducer,
})
