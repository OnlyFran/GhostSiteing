import logo from "../images/moneySkull.png"
import "../CartWidget/CartWidget.css"
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
  const { contadorProductos } = useCartContext()
  return (
    <>
        <>{contadorProductos() !== 0 && contadorProductos()} </>
        <img id="Logo" src={logo} alt=""/>
    </>
  )
}

export default CartWidget