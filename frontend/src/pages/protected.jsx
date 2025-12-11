import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

function Protect(){
    const navigate=useNavigate()
    const user=useSelector((state)=>state.userinfo.users)

    if(!user){
   return navigate('/login')
    }
    return  <Outlet/>
    
}
export default Protect