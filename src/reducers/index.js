import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' // formをreducerしてあげるためのimport
import events from './events'

export default combineReducers({ events, form })
