import api from '../../utils/api'
import { addProduct, allProducts, deleteProduct, getProduct, updateProduct } from './ActionCreators'

/**
 * Store a newly created resource in storage.
 * @param data
 * @returns {function(*): Promise<unknown>}
 */
export const handleAddProduct = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().post('/product', data).then((res) => {
      dispatch(addProduct(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * Display a listing of the resource.
 * @returns {function(*): Promise<unknown>}
 */
export const handleGetAllProducts = (pageNumber = 1) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api(true).get('/products?populate=*').then((res) => {
      dispatch(allProducts(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * Update the specified resource in storage.
 * @param data
 * @returns {function(*): Promise<unknown>}
 */
export const handleUpdateProduct = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().put(`/product/${data.id}`, data, {
      // headers: { 'Content-type': 'multipart/product-data' }
    }).then((res) => {
      dispatch(updateProduct(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * Remove the specified resource from storage.
 * @param id
 * @returns {function(*): Promise<unknown>}
 */
export const handleDeleteProduct = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api().delete(`/product/${id}`).then((res) => {
      dispatch(deleteProduct(id))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

/**
 * Remove the specified resource from storage.
 * @param id
 * @returns {function(*): Promise<unknown>}
 */
export const handleGetProduct = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    api(true).get(`/products/${id}`).then((res) => {
      dispatch(getProduct(res.data))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
