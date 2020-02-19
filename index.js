const express=require('express') 
const setupDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')
const app=express()
const port=3015

app.use(express.json())
app.use(cors())
setupDB()

app.get('/',(req,res)=>{
   // res.send('welcome to the website')
   res.json({
       notice:'Welcome to the website'
   })
})

app.use('/',router)

app.listen(port,()=>{
    console.log('Listening port',port)
})