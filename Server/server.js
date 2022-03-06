require(`dotenv`).config()
const express=require(`express`)
require(`./DB`)
const cors = require(`cors`)
const EmployeeRoute = require(`./Routes/Employee-Route`)
const AnimalRoute = require(`./Routes/Animal-Route`)
const UserRouter=require(`./Routes/User-Router`)
const App=express()
App.use(cors())
App.use(express.json())
const passport= require('passport')
require(`./Config/Passport`)(passport)
App.use(passport.initialize())

const PORT=process.env.PORT || 8000;

App.use(`/employees`,passport.authenticate(`jwt`,{session:false}),EmployeeRoute)
App.use(`/animals`,passport.authenticate(`jwt`,{session:false}),AnimalRoute)
App.use(`/auth`,UserRouter)

App.get(`/`,(req,res)=>
    res.send(`server is online`))

App.listen(PORT)

