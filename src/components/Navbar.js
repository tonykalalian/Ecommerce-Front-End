import React from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="search-container">
            <input className="navbar-input"></input>
            <SearchIcon style={{color:"grey",fontSize:16}}/>
          </div>
        </div>
        <div className="center"><h1 className="logo">Oliva Market</h1></div>
        <div className="right">
          <div className="menu-item">
            Register
          </div>
          <div className="menu-item">
            Sign in
          </div>
          <div className="menu-item">
          <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon/>
    </Badge>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
