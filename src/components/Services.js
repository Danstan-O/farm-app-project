import React from "react";
import Users from "../user.json";

function Services(){
    return (
        <section className="services">

     <h1 className="heading"> our services</h1>   
     <div className="box-container">
            {
       
                Users.map(user=>{
                    return (
                    <div className="box" key={user.id}>
                         <div className="image">
                            <img src={user.serviceImage} alt="" class="quote"></img>
                        </div>
                        <div className="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    </div>
                        
                         <div className="content">
                            <h3 >{user.services}</h3>  

                        <div className="price">Ksh. {user.servicePrice} <br></br><span>Ksh. {user.servicePrice2}</span></div>
                            </div>
                          
                           
                           <a href="#" className="btn">add to cart</a>
                        </div>
                    )
                })


            }
            </div>
        </section>
    )
}



export default Services;