import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/img/stagLogo.png"; 

const NavBar = () => {
  const categories = [
    { to: "/item/2", label: "Rodado 12" },
    { to: "/item/1", label: "Rodado 16" },
    { to: "/item/3", label: "Rodado 20" },
    { to: "/item/4", label: "BMX" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
      
        <Link className="navbar__brand" to="/">
          <img
            src={logo}
            alt="STAG Bikes Logo"
            className="brand__logo-img"
          />
          <span className="brand__text"></span>
        </Link>

        {/* 🔹 Links de navegación */}
        <nav className="navbar__links" aria-label="principal">
          <NavLink to="/" className="nav__link">
            Inicio
          </NavLink>
          {categories.map((c) => (
            <NavLink key={c.to} to={c.to} className="nav__link">
              {c.label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            className="nav__link"
            onClick={(e) => e.preventDefault()}
          >
            Contacto
          </NavLink>
        </nav>

       
        <CartWidget count={1} />
      </div>
    </header>
  );
};

export default NavBar;
