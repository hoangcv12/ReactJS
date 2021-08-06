import logo from '../../images/logo.png';
import { NavLink} from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <header className="topbar" data-navbarbg="skin6">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header" data-logobg="skin6">
            <a className="navbar-brand" href="/admin">
              <span className="logo">
                <img src={logo} alt="homepage" className="dark-logo" />
              </span>
            </a>
          </div>
          <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
            <ul className="navbar-nav me-auto mt-md-0 ">
              <li className="nav-item hidden-sm-down">
                <form className="app-search ps-3">
                  <input type="text" className="form-control" placeholder="Search for..." /> <a className="srh-btn" href="index.html"><i className="fas fa-search"></i></a>
                </form>
              </li>
            </ul>

          </div>
        </nav>
      </header>
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="pl-2">
              <li className="sidebar-item" > <NavLink exact  to="/admin" className="sidebar-link " ><i className="me-3 fas fa-tachometer-alt"></i>Dashboard</NavLink></li>
              <li className="sidebar-item" > <NavLink to="/admin/products" className="sidebar-link  "  aria-expanded="false" ><i className="me-3 fas fas fa-box-open"></i>Products</NavLink></li>
              <li className="sidebar-item" > <NavLink to="/admin/categorys" className="sidebar-link  "  aria-expanded="true" ><i className="me-3 fas fa-list-alt"></i>Categorys</NavLink></li>

            </ul>
          </nav>

        </div>

      </aside>

    </div>
  );
}