const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { 
  useNewUrlParser: true, 
  useNewUrlParser: true, 
  useFindAndModify: false, 

});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  

  
  mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/tictacdb",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));