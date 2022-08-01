import {
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  FEATURED_PRODUCT,
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../action'

export const products_reducer = (state, { type, payload }) => {
  switch (type) {
    case FEATURED_PRODUCT:
      return {
        ...state,
        featured_products: payload,
      }

    case GET_PRODUCT_BEGIN:
      return {
        ...state,
        products_Loading: true,
      }

    case GET_PRODUCT_ERROR:
      return {
        ...state,
        products_Loading: false,
        products_error: true,
      }

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: payload,
      }

    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_Loading: true,
      }

    case GET_SINGLE_PRODUCT_SUCCESS:
      console.log(payload)
      return {
        ...state,
        single_product: payload,
      }

    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_Loading: false,
        single_product_error: true,
      }

    case SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: true,
      }

    case SIDEBAR_CLOSE:
      return {
        ...state,
        isSidebarOpen: false,
      }

    default:
      throw new Error(`no ${type} match`)
  }
}
