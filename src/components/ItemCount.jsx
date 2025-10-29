import { useState } from 'react'

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial)

  const inc = () => setQty(q => (q < stock ? q + 1 : q))
  const dec = () => setQty(q => (q > 1 ? q - 1 : q))
  const add = () => onAdd?.(qty)

  return (
    <div className="count">
      <div className="count__controls">
        <button onClick={dec} className="count__btn">-</button>
        <span className="count__qty">{qty}</span>
        <button onClick={inc} className="count__btn">+</button>
      </div>
      <button onClick={add} className="count__add">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
