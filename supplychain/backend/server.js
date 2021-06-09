const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig=require("./app/config/db.config.js");
const router =express.Router;
const app = express();
const beneficiaryroutes=require("./app/routes/beneficiary");

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.use(beneficiaryroutes.appuse_xaccestoken);
console.log("/b")

app.use("/b",beneficiaryroutes.routerbeneficiary);
    












// simple route
app.get("/", (req, res) => {
  res.json({ message: "jklasdgsdg" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});