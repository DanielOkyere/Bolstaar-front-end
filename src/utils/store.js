import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'

import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'loginReducer',
    'commonReducer',
    'formsReducer'
  ]
}

const initialState = {}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [thunk]

export const Store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

window.store = Store

export const persistor = persistStore(Store)

const storeConfig = { Store, persistor }

export default storeConfig
