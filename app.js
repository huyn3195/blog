import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.get("/about",(req,res)=>{
  res.render("about.ejs");
})
app.listen(port,()=>{
  console.log(`Server is listening on port ${port}`)
})