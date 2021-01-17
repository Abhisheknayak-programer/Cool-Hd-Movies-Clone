const mongoose = require("mongoose");

// Creating A Custom Mongoose Schema
const MoviesSchema = new mongoose.Schema({
    moviename : {
        type:String,
        required:true,
        minlength:2,
    },
    movieimg : String,
    category : {
        type:String,
        required:true,
        minlength:2,
    },
    starcast:{
        type:String,
        required:true,
        minlength:2,
    },
    genere:{
        type:String,
        required:true,
        minlength:2,
    },
    releasedate:{
        type:Date,
        required:true,
    },
    duration : {
        type:String,
        required:true,
    },
    Quality:{
        type:String,
    },
    Desc : {
        type:String,
    },
    thumbnails1 :String,
    thumbnails2 :String,
    thumbnails3 :String,
    thumbnails4 :String,
    linkOne:{
        type:String,
        required:true,
    },
    linkTwo:{
        type:String,
        required:true,
    },
    linkThree:{
        type:String,
        required:true,
    }
})



// Creating a custom Mongoose Model
const Movie = new mongoose.model("Movie",MoviesSchema);



// Exporting Of the Model To use it in App.js

module.exports = Movie;