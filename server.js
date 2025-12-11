const {PrismaClient}=require('@prisma/client')

const prisma=new PrismaClient()

const Register=async(req,res)=>{
  try{
  const {email,password}=req.body
  
  const data=await prisma.register.create({
    data:{
      email,password
    }
  })
  res.json(data)
  }catch(error){
  res.json("error")
  console.log(error)
  }
}

const Login=async(req,res)=>{
  try{
    const {email,password}=req.body
    const data=await prisma.register.findFirst({
      where:{email,password}
    })
    if(!data){
        return res.status(500).json({msg:"invalid email"})
    }
  
    res.json("login sucess")
    
  }catch(error){
   res.status(500).json({ msg: "Internal error" });
  }
}
module.exports={Register,Login}