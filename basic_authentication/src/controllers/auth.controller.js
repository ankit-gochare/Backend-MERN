const userModel = require('../models/user.model')

const jwt = require('jsonwebtoken')

// function to register a user in database 
async function registerUser(req,res){

    // taking out username , email and password from user request body
    const { username , email , password} = req.body

    // check if user already exists or not
    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    // if user already exists return with message "user already exists"
    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User already exists"
        })
    }

    // if user not already exists then create new user
    const user = await userModel.create({
        username,
        email,
        password
    })

    // after creating user generate a token for the user to set in cookies 
    // taking id because it is the unique identifier for the user
    const token = jwt.sign({
        id:user._id
    } , 
    process.env.JWT_SECRET
    )

    // set token in cookies so the user get logged in automatically
    res.cookie("token" , token);

    res.status(201).json({
        message:"user registered successfully",
        user
    })
}

module.exports = { registerUser}