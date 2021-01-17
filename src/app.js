const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");
require("../db/conn");
const Movie = require("../models/movies");

// Path Declaration For The Files
const publicPath = path.join(__dirname,"../public");
const ViewsPath = path.join(__dirname,"../templates/views");
const PartialsPath = path.join(__dirname,"../templates/partials");


// App Setting For The website Environment
app.use(express.static(publicPath));
app.set("view engine","hbs");
app.set("views",ViewsPath);
hbs.registerPartials(PartialsPath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/action",(req,res)=>{
    res.render("action");
})


app.get("/adventure",(req,res)=>{
    res.render("adventure");
})


app.get("/mai_hu_na",(req,res)=>{
    res.render("mai_hu_na");
})


app.get("/movie",(req,res)=>{
    res.render("movie");
})


app.get("/MyAdmin",(req,res)=>{
    res.render("Admin");
})


app.post("/MyAdmin", async(req,res)=>{
    try {
        
        const MovieData = new Movie({
            moviename : req.body.moviename,
            movieimg : req.body.movieimg,
            category : req.body.category,
            starcast : req.body.starcast,
            genere : req.body.genere,
            releasedate : req.body.releasedate,
            duration : req.body.duration,
            Quality : req.body.Quality,
            Desc : req.body.Desc,
            thumbnails1 : req.body.thumbnails1,
            thumbnails2 : req.body.thumbnails2,
            thumbnails3 : req.body.thumbnails3,
            thumbnails4 : req.body.thumbnails4,
            linkOne : req.body.linkOne,
            linkTwo : req.body.linkTwo,
            linkThree : req.body.linkThree,
        });

        const DatabaseSave = await MovieData.save();
        console.log(DatabaseSave);
        res.status(201).render('index');
        
    } catch (error) {
        res.status(400).send("Data Is Not Satisfied");   
    }
})




app.get("*",(req,res)=>{
    res.status(404).send("Sorry The Page is Not Available");
})


app.listen(port,()=>{
    console.log(`Your Website is Live in http://127.0.0.1:${port}/`)
})