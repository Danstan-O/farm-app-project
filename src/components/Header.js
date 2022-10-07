import React, {useState} from "react";
 


function Header() {
     return (

<header className="header">

    <a href="#" className="logo">
        <img src="assets/images/logo.jpg" alt=""/>
    </a>

    <nav className="navbar">
    <a href="#home ">home</a>
        <a href="#about">about</a>
        <a href="#products">products</a>
        <a href="#services">services</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        
    </nav>

    <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
    </div>  

</header>
    )
}

export default Header;