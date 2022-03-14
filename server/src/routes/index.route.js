const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
require("../models/user.model");
const userModel = mongoose.model("users");

router.post("/isValidPassword", async (req,res) => {
    try{
        const search = await userModel.find({email: req.body.email, senha: req.body.senha});
        if (search.length > 0){
            res.json({
                isLogged: true
            })
        }else{
            res.json({
                isLogged: false,
                message: 'Você não está logado'
            })
        }
    }catch(err){
        console.log(err);
    }
})


module.exports = router