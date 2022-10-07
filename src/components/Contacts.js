import React from "react"


function Contacts() {
    return (


<section className="contact" id="contact">

    <h1 className="heading"> <span>contact</span> us </h1>

    <div class="row">

        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9586808118124!2d36.93022781528685!3d-1.1893975991324435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fa20a453525%3A0x9599d103d296d59f!2sQuick%20Mart%20Kahawa%20Sukari!5e0!3m2!1sen!2ske!4v1664893507756!5m2!1sen!2ske"  allowfullscreen="" loading="lazy" ></iframe>" 

        <form action="">
            <h3>get in touch with us</h3>
            <div className="inputBox">
                <span class="fas fa-user"></span>
                <input type="text" placeholder="name"/>
            </div>
            <div class="inputBox">
                <span class="fas fa-envelope"></span>
                <input type="email" placeholder="email"/>
            </div>
            <div className="inputBox">
                <span class="fas fa-phone"></span>
                <input type="number" placeholder="number"/>
            </div>
            <input type="submit" value="contact now" class="btn"/>
        </form>

    </div>

</section> )
}

export default Contacts;
