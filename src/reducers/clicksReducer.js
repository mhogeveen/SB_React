import { INCREMENT_CLICKS } from '../actions/types'

export default (state = 0, action) => {
   switch (action.type) {
      case INCREMENT_CLICKS:
         return (state += 1)
      default:
         return state
   }
}
