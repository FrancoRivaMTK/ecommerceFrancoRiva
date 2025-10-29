const CartWidget = ({ count = 0 }) => {
    return (
      <button className="cart" aria-label="Abrir carrito">
        <span className="cart__icon" role="img" aria-hidden>🛒</span>
        {count > 0 && <span className="cart__badge">{count}</span>}
      </button>
    )
  }
  
  export default CartWidget
  