import { combineReducers } from 'redux'

// Reducer imports
import pageReducer from './pageReducer'
import postsReducer from './postsReducer'
import clicksReducer from './clicksReducer'

export default combineReducers({
   page: pageReducer,
   clicks: clicksReducer,
   posts: postsReducer,
})
