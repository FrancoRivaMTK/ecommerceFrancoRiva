import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  if (!item) return null

  const handleAdd = (qty) => {
    alert(`Agregaste ${qty} unidad(es) de "${item.title}"`)
  }

  return (
    <section className="detail">
      <div className="detail__media">
        <img className="detail__image" src={item.img} alt={item.title} />
      </div>
      <div className="detail__info">
        <h1 className="detail__title">{item.title}</h1>
        <p className="detail__desc">{item.description}</p>
        <p className="detail__price">${item.price.toLocaleString('es-AR')}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      </div>
    </section>
  )
}

export default ItemDetail
