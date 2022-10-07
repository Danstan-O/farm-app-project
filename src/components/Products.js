import React from "react";
import Users from "../user.json";


function Product(){
    return (
        <section className="products">

     <h1 className="heading"> our Products</h1>   
     <div className="box-container">
            {
       
                Users.map(user=>{
                    return (
                        <div className="box" key={user.id}>
                            <img src={user.productImage} alt="" class="quote"></img>                 
                             <h3 >{user.product}</h3>
                           <div className="price">Ksh. {user.price}/Kg  <br></br><span>Ksh. {user.price2}/Kg</span></div>
                           {/* <a href="#" class="btn">add to cart</a> */}
                           <div className="icons">
                                <a href="#" className="fas fa-shopping-cart"></a>
                                <a href="#" className="fas fa-heart"></a>
                                
                            </div>
                        </div>
                    )
                })


            }
            </div>
        </section>
    )
}



export default Product;