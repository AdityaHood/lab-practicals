const userModel = require('../model/userModel')


const registerUser = async (req,res)=>{
    const {username,email,password} = req.body;
    try{
        if(!username || !email || !password){
            res.status(400).json({message:"please fill all the fields"});
            return;
        }
        const existingUser = await  userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"user already registered,please login"});
        }

        const user = new userModel({
            username,email,password
        })
        await user.save();
        return res.status(200).json({message:"User registered Successfully"});
        
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
        return;
    }
}

const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"please fill all the details"});
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(500).json({message:"please register first"});
        }
        const checkPass = user.password;
        if(checkPass != password){
            return res.status(400).json({message:"password is incorrect"}); 
        }
        return res.status(200).json({message:"Login Successfull"});

    }
    catch(error){
        console.log(error);
        return res.send(500).json({message:error.message}); 
    }
}

const updateUser = async(req,res)=>{
    try {
        await userModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({message:"User updated successfully"});
    } catch (error) {
        console.log(error); 
        res.status(500).json({message:error.message});
        return;
    }
}

const displayUser = async(req,res)=>{
    try {
        const user =  await userModel.findById(req.params.id);
        //if we dont want to include password then await userModel.findByid(req.params.id).select("-password")
        if(!user){
            return res.status(400).json({message:"user not found"});
        };
        return res.status(200).json({user});
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
        return;
    }
}

module.exports = {registerUser,loginUser,updateUser,displayUser};