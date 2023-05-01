import { Types } from './Types'

/**
 * @param payload
 * @returns {{payload, type: string}}
 */
export function addProduct (payload) {
  return {
    type: Types.NEW_PRODUCT,
    payload
  }
}

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export function allProducts (payload) {
  return {
    type: Types.ALL_PRODUCTS,
    payload
  }
}

/**
 *
 * @param id
 * @returns {{id, type: string}}
 */
export function deleteProduct (id) {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export function updateProduct (payload) {
  return {
    type: Types.UPDATE_PRODUCT,
    payload
  }
}

/**
 *
 * @param payload
 * @returns {{payload, type: string}}
 */
export function getProduct (payload) {
  return {
    type: Types.GET_PRODUCT,
    payload
  }
}
