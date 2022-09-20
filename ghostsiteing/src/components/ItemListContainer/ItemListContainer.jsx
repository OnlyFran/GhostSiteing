import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/cartsImage.css'
import Loading from "../Loading/Loading"
import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore'

const ItemListContainer = () => {
    const [ products, setProducts] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    const { idCategory } = useParams ();
    
    useEffect(() => {
        if(idCategory){
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryFiltrada = query(
                queryCollection,
                where('categoria', '==', idCategory)
            )
            getDocs(queryFiltrada)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    }, [idCategory])

    return (
        <>
            {loading ? 
                <Loading />
                :
                <ItemList products = {products} />
            }
        </>
    );
}

export default ItemListContainer