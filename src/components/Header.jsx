import React from "react";
import "../css/header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from "../StateProvider";

const Header = () => {
  const [{basket}] = useGlobalContext();
  return (
    <nav className="header">
      {/* Header Logo */}
      <Link to="/">
        <img src={logo} alt="" className="header__logo" />
      </Link>
      {/* Search Bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <FaSearch className="header__searchIcon" />
      </div>
      {/* Links*/}
      <div className="header__nav">
        {/* First Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo"> & Order</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* Cart with number*/}
      <Link to="/checkout">
        <div className="header__optionBasket">
          <FiShoppingCart />
          <span className="header__optionLineTwo header__optionBasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
