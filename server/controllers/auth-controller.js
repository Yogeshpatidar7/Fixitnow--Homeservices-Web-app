const User = require("../models/user-model")

const bcrypt = require("bcryptjs");
//home page routing
const home = async (req, res) => {
    try{
        res
        .status(200)
        .send("Welcome to new server");

    }catch(error){
        console.log(error);
    }
};

//Registration page routing
const register = async (req, res, next) => {
    try{
         //console.log(req.body);
        const {roles, username, email, phone, address, city, password, aadhaarNumber, services, charges} = req.body;
        
        //check email exist
        const userExist = await User.findOne({email});
    
        if(userExist){
            // console.log("Email exist");
            return res.status(400).json({ message: "email already exist"});
            
         }

        //hash password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);
        
        const userCreated = await User.create({
            roles,
            username, 
            email, 
            phone,
            address,
            city, 
            password,
            aadhaarNumber,
            services,
            charges,
        });

       
        res
        .status(200)
        .json({
            msg: "Login Successfully", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(),
        });

    }catch(error){
        console.log("register eror", error);
        res.status(500).json("internal server error");
        next(error);
    }
};


//Login page routing

const login = async (req, res) => {

    try {
        const {email, password} = req.body;
        
        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        // const isPasswordvalid = await bcrypt.compare(password, userExist.password);
        const isPasswordvalid = await userExist.comparePassword(password);

        if(isPasswordvalid){
            res
            .status(200)
            .json({
                msg: "Login Succesfully", 
                token: await userExist.generateToken(), 
                userId: userExist._id.toString(),
                userRole: userExist.roles.toString(),
            });
        }
        else{
            res.status(401).json({message: "Invalid email or password"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json("internal server error");
        //next(error);
    }
}

// to send user data - user logic

const user = async (req, res) => {
    try {
         const userData = req.user;
         console.log(userData);
         res.status(200).json({ userData});
    } catch (error) {
        console.log(`error from the user routr ${error}`);
    }

}


module.exports = { home, register, login, user } ;