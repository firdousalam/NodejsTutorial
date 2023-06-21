const userUtils = require('../utils/userUtils')
const userModel = require("../model/userSchema");
const MongooseConn = require("../config/MongoDBConfig")
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

const jwt = require('jsonwebtoken');
require('dotenv').config();
//bussiness logic
exports.getUser=(req,res)=>{
   userModel.find({}).then((list)=>{
      res.send(list);
    }).catch((err)=>{
        res.status(500).send(error);
    })

}
exports.saveUser= (request, response) => {
  
      let insertData = {"name" : userUtils.changeToUpperCase(request.body.name),
      "age" : request.body.age};
      const user = new userModel(request.body);
      console.log("app hit");
      try {
       user.save();
      response.send(user);
      } catch (error) {
      response.status(500).send(error);
      }
}
exports.getUserById=(req,res)=>{
  
   userModel.find({"_id":req.params.listId}).then((list)=>{
      res.send(list);
  }).catch((err)=>{
      res.send(err);
  })
}
exports.deleteUserById=(req,res)=>{
   userModel.deleteOne({"_id":req.params.userId})
   .then((list)=>{
       res.send(list);
   }).catch((err)=>{
       res.send(err);
   })

}


exports.registerUser= (req, res) => {
  
    
  // Our register logic starts here
   try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
   // const oldUser =  userModel.find({"email": email });
   userModel.find({"email": email })
   .then((oldUser)=> {
        console.log(oldUser);
        if (oldUser.length>0) {
        return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        encryptedUserPassword = bcrypt.hash(password, 10);
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash("B4c0/\/", salt, function(err, hash) {
                // Store hash in your password DB.
           
                // Create user in our database
                const user = userModel.create({
                first_name: firstName,
                last_name: lastName,
                email: email.toLowerCase(), // sanitize
                password: hash,
                });

                // Create token
                const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "5h",
                }
                );
                // save user token
                user.token = token;
                user.message = "registered successfully"
                // return new user
                res.status(201).json(user);
            })
        })
    });
  } catch (err) {
    console.log(err);
  }



}

exports.loginUser= (req,res)=>{
    // Our login logic starts here
   try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    userModel.find({"email": email.toLowerCase() })
    .then((user)=> {
            console.log(user)
            if (user) {
                bcrypt.compare("B4c0/\/", hash, function(err, resbcyp) {
                  //  if(resbcyp){
                        // Create token
                        const token = jwt.sign(
                            { user_id: user._id, "email": email.toLowerCase() },
                            process.env.TOKEN_KEY,
                            {
                            expiresIn: "5h",
                            }
                        );
                            console.log(token);
                        // save user token
                        user.token = token;

                        // user
                         res.send({"token":token,"message":"login successfully"});
                   
                
                });
            }else{
             res.status(400).send("Invalid Credentials");
            }
        });
    } catch (err) {
        console.log(err);
    }
  
 }