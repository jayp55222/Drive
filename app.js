const express=require('express')
const userRouter =require('./routes/user.routes')
const dotenv=require('dotenv')


dotenv.config()


const app=express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.listen(5173)