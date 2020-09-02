import { UPDATE_TITLE, UPDATE_CATEGORY, UPDATE_MESSAGE, SUBMIT_FORM } from '../actions/types'

const initialState = {
   title: '',
   content: '',
   category_id: 0,
}

export default (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_TITLE:
         return { ...state, title: action.payload }
      case UPDATE_CATEGORY:
         return { ...state, category_id: action.payload }
      case UPDATE_MESSAGE:
         return { ...state, content: action.payload }
      case SUBMIT_FORM:
         return {}
      default:
         return state
   }
}
