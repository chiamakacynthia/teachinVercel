require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT||4000
app.use(express.json())
const path = require("./Router")


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
}).then(()=>{
    console.log("database is now connected")
}).catch(() =>{
console.log("failed to connect")
})

app.use("/signIn", path)
app.get("/", (req, res) =>{
    res.send("server is ready to run")
})

app.listen(port, () =>{
    console.log(`server is listening to port:${port}`)
})