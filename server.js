const express=require('express');
const Msg=require('./controllers/msg.js')
const router=require('./routes/routes.js')
const frnds=require('./models/frnds.js')

const app=express()

app.use('/friend',router)

app.get('/',(req,res)=>{
    res.send(frnds)
})

app.get('/msg',Msg.getMsg);

app.listen(3000,()=>{
    console.log('connected');
})