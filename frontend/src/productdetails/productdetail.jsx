import { useLocation, useNavigate } from 'react-router-dom'
import './Productdetail.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/createslice2'
function Productdetail(){
    const dispatch=useDispatch()
    const {state}=useLocation()
    const navigate=useNavigate()
    const product=state
    const Addcart=()=>{
        dispatch(addToCart(product))
        alert("Added to cart")
    }
    const Buy=()=>{
       navigate('/buy',{state:{product}})
    }
    return(
        <>
        <div className="product-container">
            <div className="product-left">
          <img src={product.img} className="product-image"></img>
          <div className="product-buttons">
          <button className="add-cart" onClick={Addcart}>ADD TO CART</button>
          <button className="buy-now" onClick={Buy}>BUY NOW</button>
        </div>
      </div>

      <div className="product-right">
        <h1>{product.name}</h1>

        <p className="product-price">{product.price}</p>

        <p className="product-rating">⭐ 4.3 Ratings | 5K+ Reviews</p>

        <h3>Description</h3>
        <p className="product-desc">
          This is a high quality smartphone featuring excellent performance, 
          long battery life, high-resolution camera, and a sleek modern design.
        </p>
            </div>
        </div>
        </>
    )
}
export default Productdetail