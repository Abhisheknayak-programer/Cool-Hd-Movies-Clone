const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sankethodgar:Abc1234@cluster0.ppiur.mongodb.net/moviesWebsite", { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true }).then(() => {
    console.log("We Are Connected With The DataBase");
}).catch((err) => {
    console.log(err);
})



// Use It For Local Host
// mongodb://localhost:27017/moviesWebsite

