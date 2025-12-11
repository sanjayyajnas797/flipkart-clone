import mobile1 from '../assets/mobile1.jpg'
import mobile2 from '../assets/mobile2.jpg'
import mobile3 from '../assets/mobile3.jpg'
import mobile4 from '../assets/mobile4.jpg'
import mobile5 from '../assets/mobile5.png'
import './mobile.css'

function Mobile(){

    const products=[
        {img:mobile1,text:"Samsung"},
        {img:mobile2,text:"Nokia"},
        {img:mobile3,text:"Redmi"},
        {img:mobile4,text:"Realme"},
        {img:mobile5,text:"Moto"}
    ]

    return(
        <div className="mobile-container">
            <h2>Mobiles</h2>
            <div className="mobile-grid">
                {products.map((item,index)=>(
                    <div className="mobile-card" key={index}>
                        <img src={item.img} alt={item.text}/>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Mobile
