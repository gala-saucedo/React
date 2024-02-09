import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../Notification/Notification"

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [ quantity, setQuantity ] = useState(0)

    const { addItem } = useContext(CartContext)

    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd ={
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        showNotification("success", `Se agregaron correctamente ${quantity} ${name}`)
        setQuantity(quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src = {img} alt= {name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
        
                <Link to= "/cart" className="Option" >Terminar compra</Link>
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                
            </footer>
        </article>
    )
}

export default ItemDetail