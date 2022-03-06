const mongoose = require(`mongoose`)

const User= mongoose.Schema({
UserName:{type:String,required:true},
Email:{type:String,required:true},
Password:{type:String,required:true}
}
,{timeStamps:true})


module.exports=mongoose.model(`User`,User)