require(`dotenv`).config()
const express=require(`express`)
require(`./DB`)
const cors = require(`cors`)
const EmployeeRoute = require(`./Routes/Employee-Route`)
const App=express()
App.use(cors())
App.use(express.json())

App.use(`/employees`,EmployeeRoute)
App.listen(process.env.PORT)
App.get(`/`,(req,res)=>
    res.send(`server is online`))



