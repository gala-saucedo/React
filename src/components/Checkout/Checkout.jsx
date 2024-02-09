import { useCart } from "../../context/CartContext"
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfing"
import { useNotification } from "../Notification/Notification"
import { useState } from "react"

const Checkout = () => {
    const [oderId, setOrderId] = useState(null)
    const { cart, total } = useCart()
    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        const objOrder = {
            buyer: {
            name: "gala",
            email: "no@gmail.com",
            phone: 1234567
            },
            items: cart,
            total
        }

        const batch = writeBatch(db)
        const outOfStock = []

        const ids = cart.map(prod => prod.id)
        const productsCollection = query(collection(db, "products"), where(documentId(), "in", ids))

        const querySnapshot = await getDocs(productsCollection)
        const { docs } = querySnapshot

        docs.forEach(doc => {
            const fields = doc.data()
            const stockDb = fields.stock

            const productsAddedToCart = cart.find(prod => prod.id === doc.id) 
            const prodQuantity = productsAddedToCart.quantity

            if (stockDb += prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({ id: doc.id, ...fields})
            }
        })

        if(outOfStock.length === 0) {
            batch.commit()
            
            const orderCollection = collection (db, "orders")

            const { id } = await addDoc(orderCollection, objOrder)
            setOrderId(id)
        } else {
            showNotification("error", "Hay productos que no tienen stock disponible")
        }
    }
    if(oderId) {
        return <h1>El id de su compra es: {oderId} </h1>
    }

    return (
        <>
            <h1>CHECKOUT</h1>
            {}
            <button onClick={createOrder}>Generar orden</button>
        </>
    )
}


export default Checkout