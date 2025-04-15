const userservice = require('../service/userservice');
class UserContoller{
    static create(req,res){
        userService.create(req,res)
      
        }
        static list(req,res){
            userservice.list(req,res)
    }
    static updates(req,res){
        userservice.updates(req,res)
}
static delet(req,res){
    userservice.delet(req,res)
}
}
module.exports=UserContoller