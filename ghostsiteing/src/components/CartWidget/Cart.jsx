import { collection, getDocs, getFirestore, writeBatch, query, where, documentId, addDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import BackToMenu from '../button/BackToMenu'

const Cart = () => {
  const [id, setId] = useState('')
  const [orderForm, setOrderForm] = useState({
    email:'',
    repeatEmail:'',
    name:'',
    phone:''
  })
  const { cartList, vaciarCarrito, finalPrice, removeFromCart } = useCartContext()

  const guardarOrden = async(e) => {
    e.preventDefault()

    const order = {}
    order.buyer = orderForm
    order.items = cartList.map(prod => {
      return {
        product: prod.nombre,
        id: prod.id,
        price: prod.precio
      }
    })
    order.total = finalPrice()

    const db = getFirestore()
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
    .then(resp => setId(resp.id))

    const queryCollectionStock = collection(db, 'productos');
    const queryActualizarStock = query(
      queryCollectionStock,
      where(documentId(), 'in', cartList.map(it => it.id) )
    )
    const batch = writeBatch(db)
    
    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    })))
    .catch(err => console.log(err))
    .finally( () => {
      vaciarCarrito()
      setOrderForm({
        email:'',
        repeatEmail:'',
        name:'',
        phone:''
      })
    })
    batch.commit()
  }

  const handleChange = (e) => {
    setOrderForm({
      ...orderForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <>
        {cartList.map(item => (
          <div key={item.id}>
            <div className="col">
              <div className="card">
                <img src={item.imagen} className="card-img-top carts-objetos" alt="producto" />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">{item.descripcion}</p>
                  <p className="card-text">Cantidad seleccionada: {item.cantidad}</p>
                  <p className='card-text'>Precio por unidad: ${item.precio}</p>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-outline-danger">X</button>
                </div>
              </div>
            </div>
          </div> 
        ))}
      </>
      <p>{finalPrice() !== 0 && `Precio final: $${finalPrice()}`}</p>
      {cartList != ""
      ?
      <>
      <form onSubmit={guardarOrden} className="row g-3">
        <div className="col-md-8">
          <div className="form-outline">
            <input type="text" className="form-control" name='name' onChange={handleChange} value={orderForm.name} />
            <label className="form-label">Nombre</label>
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-outline">
            <input type="email" className="form-control" name='email' onChange={handleChange} value={orderForm.email} />
            <label className="form-label">Email</label>
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-outline">
            <input type="email" className="form-control" name='repeatEmail' onChange={handleChange} value={orderForm.repeatEmail} />
            <label className="form-label">Repita Email</label>
          </div>
        </div>
        <div className="col-md-8">
          <div className="form-outline">
            <input type="text" className="form-control" name='phone' onChange={handleChange} value={orderForm.phone} />
            <label className="form-label">Teléono</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" required />
            <label className="form-check-label">Agree to terms and conditions</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Finalizar Compra</button>
        </div>
      </form>
      <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>
      </>
      :
      <>
      {id.length > 0 && <h2>'El ID de compra es: {id}'</h2> }
      <p>No hay nada por aquí..</p>
      <BackToMenu />
      </>
      }
    </div>
  )
}

export default Cart