import {
  ADD_TO_CART,
  REMOVE_ITEM,
  CLEAR_SHOPPING_CART,
  TOTAL_AMOUNT,
  TOGGLE_AMOUNT,
} from '../action'

const cart_reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const { id, amount, mainColor: color, products } = payload
      const tempProduct = state.cart.find((item) => item.id === id + color)

      // nếu lần đầu ấn vào add to cart không có id = id + color thì nó sẽ làm cho thoả mãn cái id = id + color đó trong phần singleProduct

      // còn cartProduct đó đã ấn rồi thì tức là nó ở trong cart rồi giờ ấn nút '+' thì nó sẽ tăng số lượng lên.

      if (tempProduct) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount

            if (newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })

        return { ...state, cart: tempCart }
      } else {
        const newItem = {
          id: id + color,
          name: products.name,
          color,
          amount,
          image: products.images[0].url,
          price: products.price,
          max: products.stock,
        }

        return {
          ...state,
          cart: [...state.cart, newItem],
        }
      }
    }

    // từ đây trở đi id sẽ được chuyển đổi thành id + color
    case REMOVE_ITEM: {
      const tempProduct = state.cart.filter((item) => item.id !== payload)

      return {
        ...state,
        cart: tempProduct,
      }
    }

    case TOGGLE_AMOUNT: {
      const { text, id } = payload
      let tempProduct = state.cart
      if (text === 'increase') {
        tempProduct = tempProduct.map((item) => {
          if (item.id === id) {
            item.amount = item.amount + 1
            if (item.amount > item.stock) {
              item.amount = item.stock
            }
          }

          return item
        })
      }

      if (text === 'decrease') {
        tempProduct = tempProduct
          .map((item) => {
            if (item.id === id) {
              item.amount = item.amount - 1

              if (item.amount < 1) {
                item.amount = 0
              }
            }
            return item
          })
          .filter((item) => item.amount !== 0)
      }

      return {
        ...state,
        cart: tempProduct,
      }
    }

    case CLEAR_SHOPPING_CART: {
      return {
        ...state,
        cart: [],
        total_items: 0,
        total_price: 0,
      }
    }

    case TOTAL_AMOUNT: {
      const { total_items, total_price } = state.cart.reduce(
        (total, item) => {
          const { amount, price } = item
          total.total_items += amount
          total.total_price += amount * price

          return total
        },
        { total_items: 0, total_price: 0 }
      )

      return {
        ...state,
        total_items,
        total_price,
      }
    }

    default:
      throw new Error('no match something wrong, try again ')
  }
}
export default cart_reducer
