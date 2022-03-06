const mongoose = require(`mongoose`)

const Employee= mongoose.Schema({
Name:{type:String,required:true},
Role:{type:String,required:true},
Email:{type:string,required:true},
PhoneNumber:{type:String,required:true} 
}
,{timeStamps:true})


module.exports=mongoose.model(`Employee`,Employee)