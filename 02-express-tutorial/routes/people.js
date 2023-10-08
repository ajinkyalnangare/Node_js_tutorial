const express =require('express')
const router=express.Router()
const {people}=require('../data')
router.get('/',(req,res)=>{
    res.status(200).json({succese:true,data:people})
})
//parse form data
router.use(express.urlencoded({extended:false}))
// router.post('/login',(req,res)=>{
//    const {name}=req.body;
//    if(name){
//     return res.status(200).send(req.body.name)
//    }
//    res.status(401).send('pls provide credential')
// })
router.use(express.json())
router.post('/',(req,res)=>{
    const {name} =req.body;
    if(!name){
        return res.status(400).json({succes:false,msg:'provide name'})
    }
    res.status(201).json({succes:true,person:name})
})
router.post('/postman',(req,res)=>{
    const {name}=req.body;
    if(!name){
        res.status(401).send('please provide a name')
    }
    res.status(201).json({succes:"true",name:name})
})
router.put('/postman/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const item=people.find((product)=>{
        if(product.id===Number(id)){
            return product
        }
    })
    if(!item){
        res.status(400).send(`No person with id ${id}`)
    }
    const final=people.map((peoples)=>{
        if(peoples.id===Number(item.id)){
        peoples.name=name
        }
        return people
    })
    res.status(201).json(final)
})
router.delete('/postman/:id',(req,res)=>{
    const {id}= req.params
    const {name}=req.body
    const person=people.find((person)=>{
        if(person.id===Number(id)){
            return person
        }
    })
    if(!person){
        req.status(400).send('Invalide Id')
    }
    const fperson=people.filter((fperson)=> fperson.id !==Number(id));
    res.status(200).json(fperson)
})
module.exports=router