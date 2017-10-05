import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { promiseMiddleware, localStorageMiddleware } from './middleware'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger()))

export default store
