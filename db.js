const {PrismaClient}=require('@prisma/client')

const prisma=new PrismaClient()

const connectdb=async()=>{
  try{
    await prisma.$connect()
    console.log("connected")
  }catch(error){
    console.log("error",error)

  }
}
module.exports=connectdb