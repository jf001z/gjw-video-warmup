import { call, put, takeEvery } from 'redux-saga/effects'

import { productsUrl } from '../../../config'
import { ProductActionType } from './productsSlice'

export function* allProductsSaga() {
  yield takeEvery(ProductActionType.GET_ALL_PRODUCTS, fetchProducts)
}

const fetchAllProducts = (): Promise<{ [key: string]: any }> =>
  fetch(productsUrl)
    .then((res) => res.json())
    .then((res) => {
      return {
        response: res.products,
      }
    })
    .catch((err) => {
      console.log(err)
      return Promise.reject({ error: err })
    })

function* fetchProducts() {
  try {
    const products: { [key: string]: unknown } & { response: [unknown] } & {
      error: [unknown]
    } = yield call(fetchAllProducts)
    yield put({
      type: ProductActionType.PRODUCTS_RECEIVED,
      payload: products.response,
    })
  } catch (err) {
    console.log('errors: ', err)
    yield put({
      type: ProductActionType.PRODUCTS_FAILED,
      payload: (err as unknown as { msg?: string })?.msg,
    })
  }
}
