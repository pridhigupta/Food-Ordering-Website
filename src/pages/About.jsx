import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${MultiplePizzas})` }}
            ></div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Welcome to La Dolce Pizza, where your pizza cravings meet
                    Italian culinary excellence. At La Dolce Pizza, we're dedicated
                    to crafting the perfect slice of pizza for you, every time. From
                    classic Margheritas to gourmet creations, we offer a mouthwatering
                    variety of flavors that will leave your taste buds singing. With
                    our easy online ordering system, we make it convenient for you to
                    enjoy a slice of la dolce vita, the sweet life, right at home.
                    <br /><br />
                    Our pizzas are more than just delicious; they're prepared with 
                    meticulous attention to hygiene. We know that your trust is earned, 
                    not given, and we work tirelessly to ensure that every pizza we make 
                    meets the highest standards of cleanliness and safety. With La Dolce 
                    Pizza, you can savor your favorite flavors with complete peace of mind.
                    <br /><br />
                    We're not just pizza makers; we're pizza enthusiasts. Our team is 
                    a blend of professionals who take their craft seriously and friendly 
                    individuals who make your pizza experience as enjoyable as the first 
                    bite. Whether you're a pizza connoisseur or simply someone looking 
                    for a tasty, budget-friendly meal, we're here to serve you with a smile.
                </p>
            </div>
            <div className='footer1'>
            <span className="footerSub">
                <h1>Get in Touch</h1>
            </span>
            <form className="footerForm">
                <input className="footerInput" type='email' placeholder="Enter your email..." />
                <button className="footerSubButton">
                    SUBSCRIBE
                </button>
            </form>         
        </div>
        </div>
        
    );
}

export default About;