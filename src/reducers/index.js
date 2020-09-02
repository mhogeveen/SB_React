import { combineReducers } from 'redux'

// Reducer imports
import indexReducer from './indexReducer'
import postsReducer from './postsReducer'

export default combineReducers({
   index: indexReducer,
   posts: postsReducer,
})
