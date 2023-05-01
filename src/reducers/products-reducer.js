import { Types } from '../actions/products/Types'

const initialState = {
  products: {
    data: [],
    meta: {}
  },
  product: {}
}

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case Types.NEW_PRODUCT:
      return {
        ...state,
        products: { ...state.products, data: state.products.data.concat(action.payload) }
      }

    case Types.ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }

    case Types.GET_PRODUCT:
      return {
        ...state,
        product: action.payload.data
      }

    case Types.UPDATE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          data: state.products.data.map((product) => {
            return product.id === action.payload.id ? action.payload : product
          })
        }
      }

    case Types.DELETE_PRODUCT:
      return {
        ...state,
        products: { ...state.products, data: state.products.data.filter((product) => product.id !== action.id) }
      }

    default:
      return state
  }
}
