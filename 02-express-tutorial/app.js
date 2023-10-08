

const express=require('express')
const app=express()
const people=require('./routes/people')
const auth=require('./routes/auth')
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.use('/api/people',people)
app.use('/login',auth)
app.listen(5000,()=>{console.log('hit the server')})
