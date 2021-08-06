import React, { useState, useEffect } from 'react'
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { signOut, isAuthenticate } from "auth";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delete_Category, List_Category } from 'redux/actions/category';

export default function Nav() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [login, setLogin] = useState(false);
  const { sub } = isAuthenticate();
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.categorys.categorys);

  useEffect(() => {
    dispatch(List_Category());
  }, []);

  useEffect(() => {
    isAuthenticate() && setLogin(true);
  }, [pathname, login]);

 
  const check = () => {
    if (pathname !== "/signin" && login) {
      return (
        
        <ul className="navbar-nav mr-auto">
          {sub === "1" ? (<li className="nav-item">
            <NavLink to= "/admin"  className="nav-link" >Dashboard</NavLink>
          </li>) : (null)}
          
          <li className="nav-item">
            <NavLink to="/products" className="nav-link" >Sản phẩm</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Thể loại
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {categorys.map((cate, key) => (
              <NavLink key={key} className="dropdown-item" to onClick={() => history.push(`/products/${cate.id}`)}>{cate.name}</NavLink>
            ))}
              
              
            </div>
          </li>
          <li className="nav-item">
            <NavLink to className="nav-link" onClick={() => signOut(() => { setLogin(false); history.push("/"); })}>Logout</NavLink>
          </li>
          
        </ul>

      )
    }
    else if (pathname === "/signin" && login) {
      return <Redirect to="/" />;
    }
    else {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link" >Singin</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to className="nav-link" >Singout</NavLink>
          </li>
        </ul>
      )
    }
  }

  return (
    <div>
      <div className="text-center" style={{ backgroundColor: 'rgb(255, 201, 71)' }}>
        <img src="https://cdn.cellphones.com.vn/media/wysiwyg/new-HP_DESKTOP_COVID.png" className="img-fluid" alt="Responsive image" />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light mb-3" style={{ backgroundColor: '#e3f2fd', fontSize: '18px' }}>
        <div className="container">
          <a className="navbar-brand" href="/" style={{ color: 'rgb(238, 75, 10)' }}>Poly Shop</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {check()}

          </div>
        </div>
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={() => history.push("/addcart")}><i class="fas fa-shopping-cart"></i> Giỏ hàng</button>
      </nav>
      
     
     
    
    </div>
  )
}
