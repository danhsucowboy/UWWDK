// import { combineReducers } from 'redux'
import { configureStore, createAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import applicationReducer from './application/reducer'

// const reducers = combineReducers({})

const store = configureStore({
  reducer: {
    application: applicationReducer,
    // transactions,
  },
})

// store.
store.dispatch(createAction('global/updateVersion'))

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
