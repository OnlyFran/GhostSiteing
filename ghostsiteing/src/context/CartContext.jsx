import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const finalPrice = () => {
        return cartList.reduce((sumaPrecio, prodObj) => sumaPrecio += (prodObj.precio * prodObj.cantidad), 0)
    }

    const contadorProductos = () => {
        return cartList.reduce ((contador, produObject) => contador += produObject.cantidad, 0)
    }

    const addToCart = (prod) => {
        const i = cartList.findIndex(producto => producto.id === prod.id)
        if (i !== -1){
            cartList[i].cantidad += prod.cantidad
            setCartList([...cartList])
        } else {
            setCartList([
            ...cartList,
                prod
            ])
        }
    }

    const removeFromCart = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const vaciarCarrito = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            finalPrice,
            contadorProductos,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider