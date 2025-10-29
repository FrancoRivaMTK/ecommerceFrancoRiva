import { Link } from 'react-router-dom'

const ProductCard = ({ id, title, price, img, badge }) => {
  return (
    <article className="product">
      {badge && <span className="product__badge">{badge}</span>}

      <Link to={`/item/${id}`} className="product__image-wrap">
        <img className="product__image" src={img} alt={title} loading="lazy" />
      </Link>

      <div className="product__info">
        <h3 className="product__title">
          <Link to={`/item/${id}`} className="product__title-link">{title}</Link>
        </h3>
        <div className="product__bottom">
          <span className="product__price">${price.toLocaleString('es-AR')}</span>
          <Link to={`/item/${id}`} className="product__btn"> DESTALLES </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
