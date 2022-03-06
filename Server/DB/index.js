const mongoose = require(`mongoose`)

mongoose.connect(process.env.CONNECTION_STRING,
    {
       useNewUrlParser:true,
       useUnifiedTopology :true
    })
    .then(()=>console.log(`connected to mongoDB`))
    .catch(err => console.error(`mongoDB is not Connected`,err))

    module.exports=mongoose.connection;