import {
  LOADING_PRODUCTS,
  UPDATE_FILTER,
  FILTER,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT,
  CLEAR_FILTERS,
} from '../action'

export const filters_reducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING_PRODUCTS: {
      let maxPrice = payload.map((item) => item.price)

      maxPrice = Math.max(...maxPrice)

      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
        filter: {
          ...state.filter,
          max_price: maxPrice,
          price: maxPrice,
        },
      }
    }
    // when filter change it will filter product again. You see at first place they have value is 0. Now after loading they have new value

    case UPDATE_FILTER: {
      const { name, value } = payload

      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      }
    }

    // using spread operator to create an object that is updated to create the one lastest version
    // run by the order below
    case FILTER: {
      const { text, category, company, color, price, free_shipping } =
        state.filter
      console.log(color)
      const { all_products } = state
      let tempProduct = [...all_products]
      if (text !== 'all') {
        tempProduct = tempProduct.filter(
          (item) =>
            item.name.toUpperCase().includes(text) ||
            item.name.toLowerCase().includes(text)
        )
      }

      if (category !== 'all') {
        tempProduct = tempProduct.sort()
        console.log(tempProduct)
        tempProduct = tempProduct.filter((item) => item.category === category)
      }

      if (company !== 'all') {
        tempProduct = tempProduct.filter((item) => item.company === company)
      }

      if (color !== 'all') {
        console.log(tempProduct)
        console.log(color)
        tempProduct = tempProduct.filter((item) => {
          return item.colors.find((c) => c === color)
        })
      }

      // filter by price
      tempProduct = tempProduct.filter((item) => item.price <= price)

      if (free_shipping) {
        tempProduct = tempProduct.filter(
          (item) => item.shipping === free_shipping
        )
      }

      return {
        ...state,
        filtered_products: tempProduct,
      }
    }

    case SET_GRID_VIEW: {
      return {
        ...state,
        grid_view: true,
      }
    }

    case SET_LIST_VIEW: {
      return {
        ...state,
        grid_view: false,
      }
    }

    case UPDATE_SORT: {
      console.log(payload)
      return {
        ...state,
        sort: payload,
      }
    }

    case SORT: {
      const { sort, filtered_products } = state

      let tempProduct = []
      if (sort === 'Lowest') {
        tempProduct = filtered_products.sort((a, b) => {
          // if (a.price < b.price) {
          //   return -1
          // }
          // if (a.price > b.price) {
          //   return 1
          // }
          // return 0
          return a.price - b.price
        })
      }

      if (sort === 'Highest') {
        tempProduct = filtered_products.sort((a, b) => {
          // if (b.price < a.price) {
          //   return -1
          // }
          // if (b.price > a.price) {
          //   return 1
          // }
          // return 0
          return b.price - a.price
        })
      }

      if (sort === 'A-Z') {
        tempProduct = filtered_products.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }

      if (sort === 'Z-A') {
        tempProduct = filtered_products.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return {
        ...state,
        filtered_products: tempProduct,
      }
    }

    case CLEAR_FILTERS: {
      return {
        ...state,
        sort: 'Lowest',
        gird_view: true,
        filter: {
          ...state.filter,
          text: '',
          category: 'all',
          company: 'all',
          color: 'all',
          free_shipping: false,
          price: state.filter.max_price,
        },
        filtered_products: payload,
        all_products: payload,
      }
    }
  }
}
