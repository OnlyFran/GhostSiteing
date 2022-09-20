import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {idDetail} = useParams();

  useEffect(() => {
      const db = getFirestore()
      const queryProduct = doc(db, 'productos', idDetail)
      getDoc(queryProduct)
      .then(resp => setProduct({id: resp.id, ...resp.data() }))
  }, [])
  
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer