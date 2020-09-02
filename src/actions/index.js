import { GET_POSTS, INCREMENT_PAGE, INCREMENT_CLICKS } from './types'
import postsAPI from '../api/postsAPI'

export const getPosts = (index) => async (dispatch) => {
   const response = await postsAPI.get(`posts?page=${index}`)

   dispatch({
      type: GET_POSTS,
      payload: response.data,
   })
}

export const incrementPage = () => {
   return {
      type: INCREMENT_PAGE,
   }
}

export const incrementClicks = () => {
   return {
      type: INCREMENT_CLICKS,
   }
}
