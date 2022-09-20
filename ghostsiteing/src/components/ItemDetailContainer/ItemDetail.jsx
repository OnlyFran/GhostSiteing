import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import BackToMenu from '../button/BackToMenu';
import InputCount from '../Intercambiabilidad/InputCount';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  const [ inputType, setInputType ] = useState('activeCount');

  const handleInter = () => {
        setInputType('unactiveCount')
  }

  const {addToCart, cartList} = useCartContext()

  const onAdd = (cant) => {
    addToCart({...product, cantidad: cant});
  }

  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={product.imagen} className="card-img-top carts-objetos" alt="product" />
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">{product.descripcion}</p>
            <p className="card-text">{product.stock}</p>
          </div>
        </div>
      </div>

      <div className="col">
        {inputType == 'activeCount'
        ?
        <ItemCount initial={1} stock={50} onAdd={onAdd} handleInter={handleInter} />
        :
        <>
        <InputCount />
        <BackToMenu />
        </>
        }
      </div>
    </div>
  );
}

export default ItemDetail