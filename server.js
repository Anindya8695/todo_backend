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

const userRoute= require("./route/user.route");
const todoRoute= require("./route/todo.route");
app.use("/user", userRoute);
app.use("/todo", todoRoute);

app.get("/",(req,res) =>{
    res.send("anindya");
});

app.listen(PORT,() =>{
    console.log(`server is running on port http://localhost:${PORT}/`);
});