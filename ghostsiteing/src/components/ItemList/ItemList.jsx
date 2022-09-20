import React, { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(
  
  ( {products} ) => {

    return (
      <div>
          { products?.map ( prod => <Item key={prod.id} prod={prod} /> ) }
      </div>
    );
  } 
) 

export default ItemList