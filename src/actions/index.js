import {
   GET_POSTS,
   INCREMENT_PAGE,
   INCREMENT_CLICKS,
   GET_CATEGORIES,
   UPDATE_TITLE,
   UPDATE_CATEGORY,
   UPDATE_MESSAGE,
   SUBMIT_FORM,
} from './types'
import postsAPI from '../api/postsAPI'

export const getPosts = (index) => async (dispatch) => {
   const response = await postsAPI.get(`posts?page=${index}`)

   dispatch({
      type: GET_POSTS,
      payload: response.data,
   })
}

export const getCategories = () => async (dispatch) => {
   const response = await postsAPI.get('categories')

   dispatch({
      type: GET_CATEGORIES,
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

export const updateTitle = (payload) => {
   return {
      type: UPDATE_TITLE,
      payload,
   }
}

export const updateCategory = (payload) => {
   return {
      type: UPDATE_CATEGORY,
      payload,
   }
}

export const updateMessage = (payload) => {
   return {
      type: UPDATE_MESSAGE,
      payload,
   }
}

export const submitForm = (form) => async (dispatch) => {
   try {
      const response = await postsAPI.post('posts', form)
      console.log(response)

      dispatch({
         type: SUBMIT_FORM,
      })
   } catch (error) {
      console.log(error)
   }
}
