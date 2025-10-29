import ProductCard from './ProductCard'

const ProductGrid = ({ items }) => {
  if (!items?.length) {
    return <p className="subtitle">No hay productos para mostrar.</p>
  }

  return (
    <div className="grid">
      {items.map(prod => (
        <ProductCard
          key={prod.id}
          id={prod.id}
          title={prod.title}
          price={prod.price}
          img={prod.img}
          badge={prod.badge}
        />
      ))}
    </div>
  )
}

export default ProductGrid
