import { combineReducers } from 'redux'
import items from './items'
import selectedItem from './selected-item'

export default combineReducers({
  items,
  selectedItem
})