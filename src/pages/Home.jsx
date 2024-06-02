import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza1.jpeg'
import '../styles/Home.css'
import Choose from '../components/Choose';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <>
    <div className='home'
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), 
      rgba(255, 255, 255, 0.45)), url(${BannerImage})`
    }}>
      <div className="headerContainer">
        <h1>La Dolce Pizza</h1>
        <p>Where Every Slice is a Work of Art!</p>
        <Link to='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
    <Gallery/>
    <Choose/>
    </>
  )
}

export default Home
