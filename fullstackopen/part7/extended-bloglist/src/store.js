import { createStore, combineReducers, applyMiddleware } from 'redux'
import loginReducer from './reducers/loginReducer'
import alertReducer from './reducers/alertReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  login: loginReducer,
  alert: alertReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store