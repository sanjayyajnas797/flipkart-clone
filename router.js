const express=require('express')

const router=express.Router()

const {Register,Login}=require('./server')

router.post('/save',Register)
router.post('/login',Login)

module.exports=router