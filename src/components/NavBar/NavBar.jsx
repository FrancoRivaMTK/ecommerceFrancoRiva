import CartWidget from '../cartwidget/CartWidget'
import staglogo from '../../assets/img/stagLogo.png'

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
       
        <a>
          <img classname src = {staglogo} className='staglogo' alt="" />
        </a>

     
        <nav className="navbar__links">
          <a href="#" className="nav__link">Inicio</a>
          <a href="#" className="nav__link">Bicicletas</a>
          <a href="#" className="nav__link">Accesorios</a>
          <a href="#" className="nav__link">Contacto</a>
        </nav>

      
        <CartWidget count={2} />
      </div>
    </header>
  )
}

export default NavBar

