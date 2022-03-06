require(`dotenv`).config()
const express=require(`express`)
require(`./DB`)
const cors = require(`cors`)
const EmployeeRoute = require(`./Routes/Employee-Route`)
const AnimalRoute = require(`./Routes/Animal-Route`)
const App=express()
App.use(cors())
App.use(express.json())

App.use(`/employees`,EmployeeRoute)
App.use(`/animals`,AnimalRoute)
App.listen(process.env.PORT)
App.get(`/`,(req,res)=>
    res.send(`server is online`))



