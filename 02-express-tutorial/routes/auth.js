const express=require('express')
const router=express.Router()
router.post('/',(req,res)=>{
   const {name}=req.body;
   console.log(req.body)
   if(name){
    return  res.status(200).send(`welcome ${ajinkya}`) 
   }
  
   res.status(401).send('pls provide credentials') 
})
module.exports=router