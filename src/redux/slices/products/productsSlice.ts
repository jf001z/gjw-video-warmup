import { call, put, takeEvery } from 'redux-saga/effects'
import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../index'

import { allProductsSaga } from './productsSaga'

export interface Product {
  id: string
  name: string
}

export const enum ProductActionType {
  'ADD_PRODUCT' = 'product/add',
  'GET_ALL_PRODUCTS' = 'product/all',
  'PRODUCTS_RECEIVED' = 'product/products-received',
  'PRODUCTS_FAILED' = 'product/failed',
}

export const addProduct = createAction<Product>(ProductActionType.ADD_PRODUCT)
export const getAllProduct = createAction(ProductActionType.GET_ALL_PRODUCTS)
const productsReceived = createAction<[Product]>(
  ProductActionType.PRODUCTS_RECEIVED
)
const productsFailed = createAction(ProductActionType.PRODUCTS_FAILED)

export const productsSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct, (state, action) => {
        return [...state, action.payload]
      })
      .addCase(productsReceived, (state, action) => {
        return action.payload
      })
      .addCase(productsFailed, (state) => {
        return state
      })
  },
})

export const productsReducer = productsSlice.reducer

export const allProductsSelector = (state: RootState) => state.products
