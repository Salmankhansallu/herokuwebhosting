const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app =express();
const staticpath=path.join(__dirname,"../public");
const temppath=path.join(__dirname,"../templates");
const parpath=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",temppath);
hbs.registerPartials(parpath);
 app.use(express.static(staticpath));

app.get("/index",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404page");
});

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});