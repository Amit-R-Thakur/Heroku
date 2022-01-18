const express=require("express")
const app=express()
const data=require("./data.json")
const port=process.env.PORT||2020
app.get("/",(req,res)=>{
    res.send("hello world!")
})
app.get("/data",(req,res)=>{
    res.send(data)
})
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})
