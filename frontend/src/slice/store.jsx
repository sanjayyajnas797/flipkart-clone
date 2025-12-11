import {configureStore} from '@reduxjs/toolkit'
import  userReducer  from '../slice/createslice'
import cartReducer from '../slice/createslice2'
const store=configureStore({
    reducer:{
        userinfo:userReducer,
        usercart:cartReducer
    }
})
export default store