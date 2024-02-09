import { useCart } from "../../context/CartContext"
import "./CartItem.css"

const CartItem = () => {
    const { cart, total, removeItem} = useCart()

    return (
        <>
            <h1 className="cart-title">Carrito</h1>
            <section>
                {
                    cart.map(prod => {
                        return (
                            <div key = {prod.id}className="cart-item" style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
                                <h2>{prod.name}</h2>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Precio unidad: ${prod.price}</h3>
                                <h3>Subtotal: ${prod.quantity * prod.price}</h3>
                                <button onClick={() => removeItem(prod.id)} className="remove-button">Eliminar</button>
                            </div>
                        )
                    })
                }
            </section>
            <h1 className="cart-total">Total de la compra: ${total}</h1>
            {/* <Link to='/checkout'>Checkout</Link> */}
        </>
    )
}

export default CartItem