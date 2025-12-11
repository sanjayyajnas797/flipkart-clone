import banner1 from '../assets/flipkartbanner1.jpg'
import banner2 from '../assets/flipkartbanner2.png'
import banner3 from '../assets/flipkartbanner3.jpg'
import mobile from '../assets/mobile.png'
import grocery from '../assets/grocery.jpeg'
import mobile1 from '../assets/mobile1.jpg'
import mobile2 from '../assets/mobile2.jpg'
import mobile3 from '../assets/mobile3.jpg'
import mobile4 from '../assets/mobile4.jpg'
import mobile5 from '../assets/mobile5.png'
import '../Home/Home.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
const [current,setcurrent]=useState(0)

const banner=[banner1,banner2,banner3]

useEffect(()=>{
    const interval=setInterval(()=>{
         setcurrent(prev=>(prev+1)%banner.length)
    },1000)
    return clearInterval(interval)
},[])

const prevslide=()=>{
    setcurrent(current===0?banner.length-1:current-1)
}
const nextslide=()=>{
    setcurrent((current+1)%banner.length)
}
    const categories = [
        { img: grocery, text: "Grocery" },
        { img: mobile, text: "Mobiles" },
        { img: banner, text: "Banner" }
    ];

    const slider=[
        { id: 1, img: mobile1, name: "Samsung A12", price: "₹12,999" },
        { id: 2, img: mobile2, name: "Redmi Note 12", price: "₹9,499" },
        { id: 3, img: mobile3, name: "Realme Narzo", price: "₹10,499" },
        { id: 4, img: mobile4, name: "Vivo Y21", price: "₹13,999" },
        { id: 5, img: mobile5, name: "Nokia", price: "₹20,000" }
    ]

    return (
        <div className="home">
            <div className='banner-slider'>
          <img src={banner[current]}></img>
          <button className="prev" onClick={prevslide}>&lt;</button>
                <button className="next" onClick={nextslide}>&gt;</button>
            </div>

            <div className="homecategory">
                <div className="homecategory-bar">
                    {categories.map((item, index) => (
                        <div className="cat-item" key={index}>
                            <img src={item.img} alt={item.text} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                    <div className="deal-section">
                        <h1>Deals of the day</h1>
           <div className='deal-scroll'>
                  {slider.map((item)=>(
                    <div className="deal-card" key={item.id} onClick={()=>navigate(`/product/${item.id}`,{state:item})}>
                         <img src={item.img}></img>
                         <p className="deal-name">{item.name}</p>
                         <p className="deal-price">{item.price}</p>
                    </div>
                  ))}
           </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
