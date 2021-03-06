import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(){
    return createStore(rootReducer, applyMiddleware(logger, thunk));

}