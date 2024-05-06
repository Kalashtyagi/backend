const express = require("express");
const cors = require("cors");
const veg = require("./server")
const userRouter = require('./Routes/userRoute');
const adminRouter = require('./Routes/adminRoute')
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);
const fruits = ["mango","grapes","papaya","banana","apple"]
app.get("/fruitsData",(req,res)=>{
    const vegFruit = fruits.concat(veg.Vegetables());
    res.send(vegFruit);
});
app.get("/techName",(req,res)=>{
    const tName = ["nextjs","reactjs"];
    res.send(tName);
})

app.post("/userData",(req,res)=>{
    const {data} = req.body;
    console.log(data);
    const name = data.name;
    const email = data.email;

    res.json({
        sucess:true,
        name:name,
        email:email
    })
}
)



app.listen(8008,()=>{
    console.log("server start");
})