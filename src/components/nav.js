import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <header className="topbar" data-navbarbg="skin6">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header" data-logobg="skin6">
            <a className="navbar-brand" href="index.html">
              <span className="logo">
                <img src={logo} alt="homepage" className="dark-logo" />
              </span>
            </a>
          </div>
          <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
            <ul className="navbar-nav me-auto mt-md-0 ">
              <li className="nav-item hidden-sm-down">
                <form className="app-search ps-3">
                  <input type="text" className="form-control" placeholder="Search for..." /> <a className="srh-btn" href><i className="fas fa-search"></i></a>
                </form>
              </li>
            </ul>

          </div>
        </nav>
      </header>
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="sidebar-item" > <NavLink to="/home" className="sidebar-link " ><i class="me-3 fas fa-tachometer-alt"></i>Dashboard</NavLink></li>
              <li className="sidebar-item" > <span className="hide-menu"><NavLink to="/products" className="sidebar-link  "  aria-expanded="false" ><i class="me-3 fas fas fa-box-open"></i>Products</NavLink></span></li>
              <li className="sidebar-item" > <span className="hide-menu"><NavLink to="/categorys" className="sidebar-link  "  aria-expanded="true" ><i class="me-3 fas fa-list-alt"></i>Categorys</NavLink></span></li>

            </ul>
          </nav>

        </div>

      </aside>



    </div>
  );
}