import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined, ShoppingBasket } from '@mui/icons-material';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/unisex">Unisex</Link>
            <Link to="/shop" className="orange">
              Shop
            </Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="logo">
          <h1>eShop</h1>
        </div>

        <div className="right">
          <div className="search">
            <SearchOutlined className="search-icon" />
            <button className="sch-btn">Search</button>
          </div>
          <div className="right-buttons">
            <button>
              <Link to="/login">Log In</Link>
            </button>

            <button>
              <Link to="/sign-up">Sign Up</Link>
            </button>
            <ShoppingBasket className="basket" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
