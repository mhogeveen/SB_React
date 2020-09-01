import { GET_POSTS, INCREMENT_INDEX } from './types'

export const getPosts = (dispatch) => () => {
   dispatch({
      type: GET_POSTS,
   })
}

export const incrementIndex = () => {
   return {
      type: INCREMENT_INDEX,
   }
}
