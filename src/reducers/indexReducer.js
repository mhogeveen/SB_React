import { INCREMENT_INDEX } from '../actions/types'

export default (state = 1, action) => {
   switch (action.type) {
      case INCREMENT_INDEX:
         return (state += 1)
      default:
         return state
   }
}
