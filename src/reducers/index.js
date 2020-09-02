import { combineReducers } from 'redux'

// Reducer imports
import pageReducer from './pageReducer'
import postsReducer from './postsReducer'
import clicksReducer from './clicksReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
   page: pageReducer,
   clicks: clicksReducer,
   posts: postsReducer,
   categories: categoriesReducer,
})
