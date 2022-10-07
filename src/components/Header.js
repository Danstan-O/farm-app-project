import React, {useState} from "react";
 


function Header() {
    const [search, setSearch]=useState(false);
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
        <a href="#blogs">blogs</a>
    </nav>

    <div className="icons">
        <div className="fas fa-search" id="search-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
    </div>

    <div className="search-form">
        <input className={search? "hide":"show"} type="search" 
        id="search-box" placeholder="search here..."/>
        <label  onClick={()=>setSearch(!search)} for="search-box" className="fas fa-search"></label>
    </div>

    {/* <div className="cart-items-container">
        <div className="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-1.png" alt=""/>
            <div class="content">
                <h3>cart item 01</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-2.png" alt=""/>
            <div class="content">
                <h3>cart item 02</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <div class="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-3.png" alt=""/>
            <div className="content">
                <h3>cart item 03</h3>
                <div class="price">$15.99/-</div>
            </div>
        </div>
        <div className="cart-item">
            <span class="fas fa-times"></span>
            <img src="images/cart-item-4.png" alt=""/>
            <div class="content">
                <h3>cart item 04</h3>
                <div className="price">$15.99/-</div>
            </div>
        </div>
        <a href="#" class="btn">checkout now</a>
    </div> */}

</header>
    )
}

export default Header;