
import './App.css';
import logo from './images/logo.png';
function App() {
  return (
    <div >
  <div>
  
  <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
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
                <input type="text" className="form-control" placeholder="Search for..." /> <a className="srh-btn" href><i class="fas fa-search"></i></a>
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
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="me-3 far fa-clock fa-fw" aria-hidden="true" /><span className="hide-menu">Dashboard</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-profile.html" aria-expanded="false">
                <i className="me-3 fa fa-user" aria-hidden="true" /><span className="hide-menu">Profile</span></a>
            </li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-basic.html" aria-expanded="false"><i className="me-3 fa fa-table" aria-hidden="true" /><span className="hide-menu">Table</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="icon-fontawesome.html" aria-expanded="false"><i className="me-3 fa fa-font" aria-hidden="true" /><span className="hide-menu">Icon</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="map-google.html" aria-expanded="false"><i className="me-3 fa fa-globe" aria-hidden="true" /><span className="hide-menu">Google Map</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="blank.html" aria-expanded="false"><i className="me-3 fa fa-columns" aria-hidden="true" /><span className="hide-menu">Blank</span></a></li>
            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="404.html" aria-expanded="false"><i className="me-3 fa fa-info-circle" aria-hidden="true" /><span className="hide-menu">Error 404</span></a></li>
          </ul>
        </nav>
        
      </div>
     
    </aside>
   
    <div className="page-wrapper">
    
      <footer className="footer text-center">
        © 2021 Monster Admin by <a href="https://www.wrappixel.com/">wrappixel.com</a>
      </footer>
      
    </div>

  </div>
</div>

    </div>
  );
}

export default App;
