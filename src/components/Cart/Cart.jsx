import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import CartItem from "../CartItem/CartItem.jsx"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to = "/" className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key= {p.id} {...p}/>)} 
            <button onClick = {() => clearCart()} className="Button">Vaciar carrito</button>
            <Link to= "/checkout" className="Option">Checkout</Link>
        </div>
    )
}

export default Cart