const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
require("../models/user.model");
const userModel = mongoose.model("users");
const jwt = require('jsonwebtoken');
const { verifyJWT } = require('../middlewares/jwt.middleware');
require('dotenv').config()
/**
 * Para usar o jwt, você deve criar uma assinatura, no caso, um token
 * para isso, usamos o jwt.sign, com um id, um SECRET que no caso
 * é uma constante com uma palavra secreta, e um objeto para expirassão do token
 * Após isso criamos um middleware (ir para jwt.middleware)
 */

router.post("/isValidPassword", async (req,res) => {
    try{
        const search = await userModel.find({email: req.body.email, senha: req.body.senha});
        if (search.length > 0){
            const token = jwt.sign({userId: search._id}, process.env.SECRET, { expiresIn: 300 })
            res.status(200).json({
                isLogged: true,
                token
            });
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


router.get('/sla', verifyJWT, (req,res) => {
    res.json({
        id: req.userId
    })
})

router.get('/createRoot', async (req,res) => {
    userModel.create({email:'root@root', senha:'root'}).then(() => {
        res.json({
            message:'Criado!'
        })
    })
})
module.exports = router