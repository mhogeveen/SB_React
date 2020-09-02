import { INCREMENT_PAGE } from '../actions/types'

export default (state = 1, action) => {
   switch (action.type) {
      case INCREMENT_PAGE:
         return (state += 1)
      default:
         return state
   }
}
