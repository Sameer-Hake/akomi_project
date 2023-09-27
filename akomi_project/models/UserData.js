const mongoose=require('mongoose');

const UserDataSchema=new mongoose.Schema(
    {
        email:{String},
        password:{String}
    },
    {timestamps:true}
)

const UserDataModel=mongoose.model("UserDataTable",UserDataSchema);
module.exports=UserDataModel