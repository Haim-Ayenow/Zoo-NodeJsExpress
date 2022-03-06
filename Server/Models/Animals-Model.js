const mongoose = require(`mongoose`)

const Animal= mongoose.Schema({
Name:{type:String,required:true},
BirthDay:{type:Date,required:true},
CageNumber:{type:Number,required:true},
Gender:{type:String,required:true},
Brand:{type:String,required:true}
}
,{timeStamps:true})


module.exports=mongoose.Model(`Animal`,Animal)