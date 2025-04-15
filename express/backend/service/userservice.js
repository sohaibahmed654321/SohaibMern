const User = require('../model/model.js')

class UserService{

    async create(req,res){
        
        try{
            const data = (({name,email,password})=>({name,email,password}))(req.body);
            User.insertMany([data]);
            res.status(200).json({message:"User created Successfully"})

        }
        catch(err){
            res.status(400).json({message:err})

        }
    }
    async list(req,res){
        try{
            const user =await User.find({});
            res.status(200).json({message:"success",data:user})
        }
        catch(err){res.status(400).json({message:err})}
    }          
    async updates(req,res){
        try{
            const id = req.params.id;
            const data=(({name,email})=>({name,email}))(req.body)
            await User.findByIdAndUpdate(id,data);
            res.status(201).json({message:"user updated"})
        }
        catch(err){res.status(400).json({message:err})}
    }
    async delet(req,res){
        try{
            const id = req.params.id;
          await User.findByIdAndDelete (id,data);
            res.status(201).json({message:"user deleted"})
        }
        catch(err){res.status(400).json({message:err})}
    }
}
module.exports= new UserService;