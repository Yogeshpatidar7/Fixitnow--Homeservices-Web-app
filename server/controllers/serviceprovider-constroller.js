const User = require("../models/user-model");

const getServiceProvider = async (req, res, next) => {
    try {
        const City = req.body.City;
        console.log(city);
        const users = await User.find({roles: "serviceProvider", city: city},{password:0});
        
        if(!users || users.length === 0){
            return res.status(404).json({message: "No users found"});
        }
        return res.status(200).json(users);

    } catch (error) {
        next(error);
    }
};

const getServiceProviderlist = async (req, res) => {
    try {
        const city = req.body.City;
        const service = req.body.Service;
        const users = await User.find({roles: "serviceProvider", city: city, services: service},{password:0});
        
        if(!users || users.length === 0){
            return res.status(404).json({message: "No users found"});
        }
        return res.status(200).json(users);

    } catch (error) {
        next(error);
    }
};


module.exports = { getServiceProvider,getServiceProviderlist };