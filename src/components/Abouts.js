import React from "react";

function About() {
    return (

<section className="about" id="about">

    <h1 className="heading"> <span>about</span> us </h1>

    <div className="row">

        <div className="image">
            <img src="assets/images/about-image.jpg" alt=""/>
        </div>

        <div className="content">
            <h3>who are mwiko ventures?</h3>
            <p>mwiko ventures is an agricultural start-up currently based in Ruiru, Kenya. </p>
            <p>we have a dream of transforming the kenyan agricultural sector and we are planning on partnering with different stakeholders in the industry to achieve this drean and vision.</p>
           
            <a href="#" className="btn">learn more</a>
        </div>

    </div>

</section>)
}

export default About;