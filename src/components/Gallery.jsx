import React, { useState } from 'react'
import '../styles/Gallery.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const images = [
    "https://cdn.pixabay.com/photo/2014/06/10/15/47/pizza-366111_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JBUh1qqS7USqvxSrBSSloqRQNKOWuEehjAYCmrJm&s",
    "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg", "https://media.istockphoto.com/id/1421607041/photo/a-slice-of-hot-italian-pizza-with-stretching-cheese-pizza-four-cheeses-with-basil.webp?b=1&s=612x612&w=0&k=20&c=dQNhTM3GAMt-zEugtm8XOSoE9RvOzCPYItZUUwe3UVY=",
    "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_640.jpg",
    "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_640.jpg",
    "https://media.istockphoto.com/id/899907172/photo/baked-tasty-margerita-pizza-near-oven.jpg?s=1024x1024&w=is&k=20&c=pX96yzEbGxsyTF5W3YfaKLlQSsC9n3RvqQFggJsQIhY=",
    "https://cdn.pixabay.com/photo/2017/07/25/09/08/pizza-oven-2537308_640.jpg",
    "https://cdn.pixabay.com/photo/2018/03/15/07/04/pizza-3227292_640.jpg",
    "https://media.istockphoto.com/id/1454315798/photo/sliced-ham-bacon-and-cheese-with-delicious-italian-pizza-toppings-on-an-old-kitchen-table.webp?b=1&s=612x612&w=0&k=20&c=Yx36zRhXot322Zd5fAlMrcu230BqXyQDCy6XPaO68jk=",
    "data:image/jpeg;base64,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",
    " https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000601_640.jpg",
    "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
    "https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_640.jpg",
]

const Gallery = () => {
    const [data, setData] = useState({ img: '', i: 0 })
    const viewImage = (img, i) => {
        setData({ img, i })
    }
    const imgAction = (action) => {
        let i = data.i;
        if (action == 'next-img') {
            setData({ img: images[i + 1], i: i + 1 })
        }
        if (action == 'previous-img') {
            setData({ img: images[i - 1], i: i - 1 })
        }
        if (!action) {
            setData({ img: '', i: 0 })
        }
    }
    return (
        <>
            {data.img &&
                <div style={{
                    width: '100%',
                    height: '100vh',
                    background: 'black',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',


                    overflow: 'hidden',
                }}>
                    <button onClick={() => imgAction()} style={{ position: 'absolute', top: '70px', right: '70px' }}>X</button>
                    <button onClick={() => imgAction('previous-img')}>Previous</button>
                    <img src={data.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%' }} />
                    <button onClick={() => imgAction('next-img')}>Next</button>
                </div>}
            <div className="mainfiv" style={{ padding: '30px' }}>
                <div className='heading'>Our Photo Gallery</div>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter='20px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block", cursor: "pointer" }}
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}

export default Gallery