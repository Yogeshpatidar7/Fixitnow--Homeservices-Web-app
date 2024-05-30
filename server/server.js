require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

main().catch(err => console.log(err));

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Fixitnow');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
    role: String,
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String,
    password: String, 
    aadhaarNumber: String,
    service: String,
});

//json web token for session
userSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            //payload
            userID: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        }
    );
    } catch (error) {
        console.error(error);
    }
}

const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/demo',async (req,res)=>{
    let user = new User();
    // const salt = bcrypt.genSaltSync(10);
    // const hashPassword = bcrypt.hashSync(req.body.password, salt)
    user.role=req.body.role;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.mobileNumber = req.body.mobileNumber;
    user.email = req.body.email;
    user.password= req.body.password;
    user.aadhaarNumber = req.body.aadhaarNumber;
    user.service = req.body.service;
    const doc = await user.save();

    // console.log(doc);
    res.json({ msg:"registration succesfull", token: await user.generateToken(), });
})

server.post('/Login', async(req, res) => {
    try {
        const database = client.db('Fixitnow');
        const users = database.collection('users');
        const query = { mobileNumber: req.body.mobileNumber };
     
        const user = await users.findOne(query);
        const data =  {
            mobileNumber: String,
            password: String,
            Success: Boolean,
            Message: String
        }
        if(user != null)
        {
            if(user.password == req.body.password)
            {
                data.mobileNumber = req.body.mobileNumber;
                data.password = req.body.password;
                data.Success = true;
                data.Message = "Logged in Successfully";
                res.json(data);
            }
            else{
                data.mobileNumber = req.body.mobileNumber;
                data.password = req.body.password;
                data.Success = false;
                data.Message = "Password not match";
                res.json(data);
            }
        }
        else{ 
            data.mobileNumber = req.body.mobileNumber;
            data.password = req.body.password;
            data.Success = false;
            data.Message = "User not found";
            res.json(data);
        }
      }
      catch(error)
      {
        console.log(error);
      }
})


server.listen(8080,()=>{
    console.log('server started')
})