import React, {useState, useEffect} from "react";
import Comments from "../reviews.json";



function Reviews(){

    const [image, setImage] = useState(null)
  useEffect(() => {
     fetch("https://randomfox.ca/floof/")
       .then(r => r.json())
       .then(data => setImage(data.image))
 }, [])
  if (!image) {
     return <h2>Loading...</h2>
 }

    return (
        <section className="review">

     <h1 className="heading"> Reviews</h1>   
     <div className="box-container">
            {
       
                Comments.map(comment=>{
                    return (
                        <div className="box" key={comment.id} >
                          <img src="..assets/images/quote-img.png" alt="" className="quote"></img>
                          <h3 >{comment.comments}</h3>
                          <img src={image} className="user" alt="Random Fox" />
                           <h3 >{comment.name}</h3>
                        
                           <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        </div>
                    )
                })


            }
            </div>
        </section>
    )
}



export default Reviews;
