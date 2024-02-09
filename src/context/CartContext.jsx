import { createContext, useContext, useState} from "react"

export const CartContext = createContext ({
    cart: [],
    addItem: () => {},
    isInCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    const totalQuantity= getTotalQuantity()

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })
        return accu
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }
     
    return (
        <CartContext.Provider value = {{ cart, addItem, removeItem, totalQuantity, total, clearCart}}>{ children } </CartContext.Provider>
    )
} 

export const useCart = () => {
    return useContext(CartContext)
}

