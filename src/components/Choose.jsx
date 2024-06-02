import React from 'react'
import PizzaLeft from "../assets/pizzaLeft1.jpg";
import '../styles/Home.css'
export default function Choose() {
  return (
    <div className="choose">
        <div className="leftside"
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        >
        </div>
        <div className="rightside">
          <h1>What Makes Our Food Special?</h1>
          <p>
            At La Dolce Pizza, here's what makes our pizzas truly special:

            <h2>A Slice of Italy: </h2>Our pizzas are a journey to the heart of Italy,
            where the passion for food knows no bounds. 

            <h2>Unlimited Creativity: </h2>Our menu is a canvas for culinary
            creativity. Explore our menu.

            <h2>Customization at Your Fingertips: </h2>With our customizable options for toppings, crust,
            and size, you have freedom to design .

            <h2>A Slice of Safety: </h2>Highest standards of cleanliness and preparation,
            ensuring the trust and confidence of
            our customers.
          </p>
        </div>
      </div>
  )
}
