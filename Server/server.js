require(`dotenv`).config()
const express=require(`express`)
const App=express()

App.listen(process.env.PORT)
App.get(`/`,(req,res)=>
    res.send(`server is online`))
