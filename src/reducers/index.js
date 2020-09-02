import { combineReducers } from 'redux'

// Reducer imports
import pageReducer from './pageReducer'
import postsReducer from './postsReducer'

export default combineReducers({
   page: pageReducer,
   posts: postsReducer,
})
