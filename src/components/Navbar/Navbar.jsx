import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import SearchBar from '../SearchBar/SearchBar';


const navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();
    
    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }


  
  return (
    <div className='navbar'>
      <Link to={'/'}><img src={assets.burger28_logo } alt="" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#recipe' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Recipe</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>App-download</a>
        <a href='#contact' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" className='search-icon' /> */}
        <SearchBar />

        {/* <i id='search-icon' className="ri-search-line search-icon"></i> */}
        <div className="navbar-search-icon">
            <Link to={'/cart'}>
            {/* <img src={assets.basket_icon} alt="" /> */}
            <i  id='cart-icon'  className="ri-shopping-bag-3-fill "></i>
            </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile search-icon'>
              <img src={assets.man} alt="" className='login-man'/>
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}>
                  {/* <img src={assets.bag_icon} alt="" /> */}
                  <i  id='cart-icon'  className="ri-shopping-bag-3-fill"></i>
                  <p>Orders</p></li>
                <hr />
                <li onClick={logout}>
                  {/* <img src={assets.logout_icon} alt="" /> */}
                  <i  id='cart-icon'  className="ri-logout-box-r-fill"></i>
                  <p>Logout</p></li>
              </ul>
          </div>}
      </div>
    </div>
  )
}

export default navbar
