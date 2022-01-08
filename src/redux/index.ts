// import { combineReducers } from 'redux'
import { configureStore, createAction } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

// const reducers = combineReducers({})

const store = configureStore({
  reducer: {
    // application,
    // transactions,
  },
})

// store.
store.dispatch(createAction('global/updateVersion'))

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
