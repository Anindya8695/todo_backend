const express= require("express");
const mongoose= require("mongoose");
const cors= require("cors");

const app =express();
const PORT=5001;

app.use(express.json());
app.use(cors());

mongoose
   .connect(
    "mongodb+srv://ap8669207:test123@cluster7.dxsi1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster7",{}
)
.then(() =>{
    console.log("cnnected to the database");
});

const userRouth= require("./route/user.route");
app.use("/user", userRouth);

app.get("/",(req,res) =>{
    res.send("anindya");
});

app.listen(PORT,() =>{
    console.log(`server is running on port http://localhost:${PORT}/`);
});