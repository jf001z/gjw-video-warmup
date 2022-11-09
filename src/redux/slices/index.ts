import { combineReducers } from '@reduxjs/toolkit'
import { all, fork } from 'redux-saga/effects'
import { allProductsSaga, productsSlice } from './products'

export const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
})
export function* rootSaga() {
  yield all([fork(allProductsSaga)])
}

export * from './products'
