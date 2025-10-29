import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { getProducts } from '../utils/mockApi'

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProducts(categoryId)
      .then(setItems)
      .finally(() => setLoading(false))
  }, [categoryId]) // <= importante: depende de la URL

  return (
    <section className="item-list-container">
      <h1 className="title">{greeting}</h1>
      <p className="subtitle">
        {categoryId ? `Filtrando por categoría: ${categoryId}` : 'Explorá nuestro catálogo.'}
      </p>

      {loading ? <p className="subtitle">Cargando...</p> : <ProductGrid items={items} />}
    </section>
  )
}

export default ItemListContainer

