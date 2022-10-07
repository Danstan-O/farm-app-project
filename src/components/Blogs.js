import React, { useEffect, useState } from 'react';
 

 
function Blogs() {
 const [image, setImage] = useState(null)
 const API_KEY="0e0ce7b67feb4e01bce947110f603b2a"
 
  useEffect(() => {
     fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-10-05&sortBy=popularity&apiKey=${API_KEY}`)
       .then(r => r.json())
       .then(data => console.log(data.image))

      
 }, [])
  if (!image) {
     return <h2>Loading...</h2>
 }
  return (
   <div>
      <img src={image} alt="Random Fox" />
   </div>
 );
}
 
export default Blogs












// function Blogs() {
//     return (

// <section className="blogs" id="blogs">

//     <h1 className="heading"><span>blogs</span> </h1>

//     <div className="box-container">

//         <div className="box">
//             <div className="image">
//                 <img src="assets/images/blogs-1.jpg" alt=""/>
//             </div>
//             <div class="content">
//                 <a href="#" class="title">seeds of gold</a>
//                 <span>by admin / 3rd oct, 2022</span>
//                 <p>the articles offer an in depth know how into the agricultural sector in kenya and best 
//                     farming pactices for farmers to adopt.</p>
//                 <a href="#" class="btn">read more</a>
//             </div>
//         </div>

//         <div className="box">
//             <div className="image">
//                 {/* <img src="assets/images/blog-2.jpeg" alt=""/> */}
//             </div>
//             <div className="content">
//                 <a href="#" className="title">farmers choice</a>
//                 <span>by admin / 3rd oct, 2022</span>
//                 <p></p>
//                 <a href="#" class="btn">read more</a>
//             </div>
//         </div>

//         <div className="box">
//             <div className="image">
//                 {/* <img src="assets/images/blog-3.jpeg" alt=""/> */}
//             </div>
//             <div className="content">
//                 <a href="#" class="title">from charcoal to gold</a>
//                 <span>by admin / 3rd oct, 2022</span>
//                 <p></p>
//                 <a href="#" className="btn">read more</a>
//             </div>
//         </div>

//     </div>

// </section>)
// }

// export default Blogs;