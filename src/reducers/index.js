import { combineReducers } from 'redux'
import sessionStorage from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist'
import loginReducer from './login-reducer'
import productsReducer from './products-reducer'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: [
    'loginReducer',
    'productsReducer'
  ]
}

const appReducer = combineReducers({
  loginReducer,
  productsReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'REMOVE_AUTH') {
    // state.loginReducer.authenticated = false
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
