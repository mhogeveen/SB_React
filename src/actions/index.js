import { GET_POSTS, INCREMENT_INDEX } from './types'
import postsAPI from '../api/postsAPI'

export const getPosts = (index) => async (dispatch) => {
   const response = await postsAPI.get(`/posts?page=${index}`)
   console.log(response.data)

   dispatch({
      type: GET_POSTS,
      payload: response.data,
   })
}

export const incrementIndex = () => {
   return {
      type: INCREMENT_INDEX,
   }
}
