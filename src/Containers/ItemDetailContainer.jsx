import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'
import { getProductById } from '../utils/mockApi'


const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id)
      .then(setItem)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="subtitle">Cargando detalle...</p>
  if (!item) return <p className="subtitle">No se encontró el producto.</p>

  return <ItemDetail item={item} />
}

export default ItemDetailContainer
