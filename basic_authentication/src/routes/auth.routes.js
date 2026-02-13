const express = require('express')

const authController = require('../controllers/auth.controller')

const router = express.Router();

// api to create users 
router.post('/register' , authController.registerUser)

// dummy api to check value in cookie 
router.get("/test" , (req,res)=>{
    console.log("cookies :" , req.cookies)
    res.json({
        message:"Test route",
        cookies: req.cookies
    })
})

module.exports = router;