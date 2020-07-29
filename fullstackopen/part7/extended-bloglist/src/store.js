import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import alertReducer from './reducers/alertReducer'
import blogReducer from './reducers/blogReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  blogs: blogReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
