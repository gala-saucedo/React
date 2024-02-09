import { useEffect, useState } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { db } from "../../services/firebase/firebaseConfing"
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore"
import { useNotification } from "../Notification/Notification"


const ItemDetailContainer = () =>  {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    const { showNotification } = useNotification()

    useEffect (() => {
        setLoading(true)

        const productDocument = doc(db, "products", itemId)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productsAdapted = { id: queryDocumentSnapshot.id, ...fields}
                setProduct(productsAdapted)
            })
            .catch(error => {
                showNotification("error", "Hubo un error")
            })
            .finally(() => {
                setLoading(false)
            })

        // getProductById(itemId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }, [itemId])

    if(loading) {
        return <h1>Cargando el producto...</h1>
    }
    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer