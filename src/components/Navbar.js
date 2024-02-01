import React from 'react';
import logo from '../images/logo.png'; // Assuming the logo is in the src/images folder

const NavBar = () => {
  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* Logo */}
              <div className="site-logo">
              <img src={logo} alt="Logo"/>

              </div>

              {/* Main Menu */}
              <nav className="main-menu">
                <ul>
                  {/* Menu Items */}
                  <li className="current-list-item"><a href="#">HOME</a></li>
                  <li><a href="#">ABOUT</a></li>
                  <li><a href="#">PORTFOLIO</a></li>
                  <li><a href="#">SERVICE</a></li>
                  <li><a href="#">BLOG</a></li>
                  <li><a href="#">CONTACT</a></li>

                  {/* Header Icons */}
                  <li>
                    <div className="header-icons">
                      <a className="shopping-cart" href="#"><i className="bi bi-person-fill"></i></a>
                      <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                    </div>
                  </li>
                </ul>
              </nav>

              {/* Mobile Search Icon */}
              <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>

              {/* Mobile Menu */}
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;