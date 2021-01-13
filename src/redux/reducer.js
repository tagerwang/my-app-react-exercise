import {change_count, add_count} from './actions'
let storeState = {
  count: 10,
  value: 0,
  userInfo: null
}
function changeCountReducer( state = storeState, actions ){
  console.log('changeCountReducer===', state)
  switch( actions.type ){
      case change_count:
          return { ...state, count: actions.data.count }
      default:
          return state
  }
}
function addCountReducer( state = storeState, actions ){
  console.log('addCountReducer===', state)
  switch( actions.type ){
      case add_count:
          return { ...state, count: state.count + 1 }
      default:
          return state
  }
}
const reducer = {
  changeCountReducer,
  addCountReducer
}
export default reducer