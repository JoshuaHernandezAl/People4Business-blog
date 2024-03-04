import { Search } from '../../components/shared/Search';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark w-100 mb-3">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={`nav-item nav-link text-light`}
                to="/home"
              >
                Home
              </NavLink>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  )
}
