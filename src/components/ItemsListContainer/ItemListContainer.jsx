import { useEffect, useState } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfing"
import { getDocs, collection, query, where } from "firebase/firestore";
import { useNotification } from "../Notification/Notification";


const ItemListContainer = ({greeting}) => {
    const [loading, setloading] = useState(true)
    const [products, setProducts] = useState([])
    const {categoryId} =  useParams()

    const { showNotification } = useNotification()

    useEffect (() => {
        setloading(true)

        const productsCollection = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                showNotification("error", "hubo un error")
            })
            .finally(() => {
                setloading(false)
            })
        // const asyncFunc = categoryId ? getProductsByCategory : getProducts

        // asyncFunc(categoryId)
        // .then(response => {
        //     setProducts(response)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando los productos...</h1>
    }

    return (
        <div>
            <h1> {greeting + (categoryId ?? "")} </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer