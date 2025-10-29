import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="item-list-container">
      <h1 className="title">404 · Página no encontrada</h1>
      <p className="subtitle">El enlace puede estar mal escrito o la página fue movida.</p>
      <Link to="/" className="product__btn" style={{ display: 'inline-block', marginTop: 8 }}>
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
