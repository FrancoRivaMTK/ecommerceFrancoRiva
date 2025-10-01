
const CartWidget = ({ count = 0 }) => {
    return (
      <button className="cart">
        <span className="cart__icon" aria-label="Carrito" role="img">🛒</span>
 
        {count > 0 && <span className="cart__badge">{count}</span>}
      </button>
    )
  }
  
  export default CartWidget
  