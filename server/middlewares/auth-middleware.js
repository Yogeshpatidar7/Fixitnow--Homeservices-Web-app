//verifying JWT

const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware =  async (req, res, next) => {
   const token = req.header("Authorization");

   if(!token){
        //it you attemppt to use an expired token,you'll recieve a "401 unauhthorizes HTTP reponse"
        return res.status(401).json({msg: "Unauthorized HTTP, token not provided"});
   }

   //token is in the format "Bearer <jwttoken>, removing the "Bearer" prefix "
   const jwtToken = token.replace("Bearer", "").trim();
  //  console.log("Token from auth middleware", jwtToken);

   try {
    
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
   
    const userData = await User.findOne({email: isVerified.email}).
    select({
      password: 0,
    });
     console.log(userData);

    req.token = token;
    req.user = userData;
    req.userID = userData._id;

    next();
   } catch (error) {
    // console.log(error);
    return res.status(401).json({msg: "Unauthorized. Invalid token"});
   }
  
};

module.exports = authMiddleware;