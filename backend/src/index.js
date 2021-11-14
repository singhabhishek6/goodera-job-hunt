const express = require("express")
const data= require("./data")
const app = express()

app.get("/jobs",async (req,res)=>{
    return  res.status(200).send(data)
})

app.get("/jobs/:id",async (req,res)=>{
    let id = +req.params.id;
    console.log(id);
    let result = []
    data.forEach(element => {
        if(element.id === id) result.push(element) 
    });
    return  res.status(200).send(result[0])
})

app.get("/jobss",async (req,res)=>{
    
    console.log(req.query);
    let result = []
   if(req.query.title){
    data.forEach(element => {
        if(element.title.includes(req.query.title)) result.push(element) 
    });
    return  res.status(200).send(result)
   }
   else{
       let city = req.query.location.trim().split(",").map(r=> r.trim())
       console.log(city);
    data.forEach(element => {
        let savedCity = element.location.trim().split(",").map(r=> r.trim())
    });
    return  res.status(200).send(result)
   }
})



app.listen(1234,  ()=>{
    console.log("listening");
})