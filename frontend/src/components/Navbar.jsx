import {Link,useNavigate} from 'react-router-dom'
import '../components/Navbar.css'
import {FcSearch} from 'react-icons/fc'
import { CiCircleMore } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { removeuser } from '../slice/createslice';
import { useState } from 'react';

function Navbar(){
    const [search,setsearch]=useState('')
    const navigate=useNavigate()
    const user=useSelector((state)=>state.userinfo.users)
    const dispatch=useDispatch()

    const handlesearch=()=>{
        const query=search.toLowerCase()
        if(!user){
            return navigate('/login')
        }


      else  if(query==="mobile" || query==="mobiles"){
            return navigate('/mobile')
        }
        else if(query==="grocery" || query==="grocerys"){
            return navigate('/grocery')
        }
        else{
            return alert("No products available")
        }
    }

    const click=()=>{
        navigate('/login')
    }
    const Logout=()=>{
        dispatch(removeuser())
        navigate('/home')
    }
    return(
        <>
        <div className='navbar'>
        <div className='image'>
            <Link to='/home' className='logo'>Home</Link>
             </div>
            <div className='search'>
                <input type='text' placeholder='serach for products' value={search}  onChange={(e)=>setsearch(e.target.value)}></input>
                <button className='button' onClick={handlesearch}>
                    <FcSearch/>
                </button>
            </div>

            {user&&<div className='more'>
                <button className='more-btn'>
                    <CiCircleMore/>
                </button>
            </div>}
           {!user&& <div className='login'>
                <button className='login-btn' onClick={click}>Login</button>
            </div>}
           {user&& <div className='cart-nav'>
                <Link to='/cart' className='cart'>Cart</Link>
            </div>}
            {user&&<div >
                <button onClick={Logout} className='logout'>Logout</button>
            </div>}
            </div>
       

        </>
    )
}
export default Navbar