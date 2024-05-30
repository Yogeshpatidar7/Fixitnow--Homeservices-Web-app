const {Schema, model, default: mongoose} = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//user schema
const userSchema = new Schema({
    roles: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    
    password: {
        type: String,
        require: true,
    },
    aadhaarNumber: {
        type: String,
        require: true,
    },
    services: {
        type: String,
        require: true,
    },
    charges: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

//secure the password with bcrypt

userSchema.pre("save", async function (next) {
    // console.log("pree method", this);
    const user = this;  // this-> all data 

    if (!user.isModified("password")) {
        next();
    }
    // if password modified
    try {
        ;
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error)
    }
});

//compare the password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

//json web taken, token are issued by server, token  are not stored in db , instead store on client side eg cookied or local storage for later user
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


//define the model or the collection name
const User = new model("User", userSchema);
module.exports = User;

