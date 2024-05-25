const express = require('express')
const router = express.Router()
const User= require('../Models/userModel')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')

router.post('/register', async (req, res) => {
    console.log(req.body);
    try {

        let { firstName,lastName,phoneNumber,email,password } = req.body

        // Removing whitespaces
        email = email.trim()
        password = password.trim()


        // Input Validation
        if (!email || !password || email.trim() === "" || password.trim() === "") {
            return res.send("Enter a valid user email ID and password.");
        }

        // Querying DB to find whether User aldready exist
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.send('User name :' + email + ' aldready exists')
        }

        //Hashing the password
        let hashedpassword = bcrypt.hashSync(password)

        //if new user creatig a new document
        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            password: hashedpassword
        });

        // Saving the document to the collection
        newUser.save().then((savedUser) => {
            console.log(savedUser)
            res.status(201).send({
                message: 'user registered successfully'
            })
        }).catch((err) => {
            console.log(err.message)
            res.send(err.message)
        })
    }
    catch (err) {
        console.log("ERROR:" + err.message)
    }
})

router.post('/login', async (req, res) => {

    try {
        let { email, password } = req.body

        // Removing whitespaces
        email = email.trim()
        password = password.trim()


        // Input Validation
        if (!email || !password || email.trim() === "" || password.trim() === "") {
            return res.status(400).send({ Status: 400, Message: "Enter a valid user email ID and password" });
        }


        // Querying DB to get the user credentials 
        const validUser = await User.findOne({ email: email });



        //user validation 
        if (validUser && bcrypt.compareSync(password, validUser.password)) {

            //jwt token creation

            var token= jwt.sign({user_id:validUser._id},'renteasy',{expiresIn: 60 * 60})
            res.cookie("authToken",token)
            // res.header("token",token)
            res.status(200).json({ Status: 200, Message: "Authenticated Successfully" })
        } else {
            res.status(400).json({ Status: 400, Message: "Bad Request! Check the credentials" })
        }

    }catch(err){
        res.send(err.message)
    }
})

module.exports = router