const express = require("express")
const model = require("./model")
const router = express.Router()


router.get("/", async (req, res) =>{
    const getData = await model.find()
    try {
        res.status(200).json({
            message:"user found",
            data: getData,
        })
    } catch (error) {
        res.status(404).json({
            message:"failed to get",
            data: error,
        })
    }
})

router.post("/", async (req, res) =>{
    const createNewUser = await model.create({
      email: req.body.email,
      password: req.body.password,  
    })
    try {
        res.status(200).json({
            message:"user created",
            data:createNewUser,
        })
    } catch (error) {
        res.status(404).json({
            message:"failed to create",
            data:error,
        })
    }
})


module.exports = router;