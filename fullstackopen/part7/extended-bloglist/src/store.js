import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import alertReducer from './reducers/alertReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  blogs: blogReducer,
  users: userReducer,
})

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const presistedState = loadFromLocalStorage()

const store = createStore(
  reducer,
  presistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
