const verifySignUp  = require("../middleware/verifySignUp");
const authcontroller = require("../controllers/auth.controller");
const app2 = require("express");
const routerbeneficiary=app2.Router();
const  authjwt  = require("../middleware/authjwt");
const  controllerbene = require("../controllers/beneficiary.controller");


const appuse_xaccestoken= (req, res, next) => {
    res.header("Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  };
  routerbeneficiary.post("/auth/bsignup",verifySignUp,authcontroller.signup);
  routerbeneficiary.post("/auth/bsignin", authcontroller.signin);
  routerbeneficiary.get("/verify/beneficiary",authjwt.beneficiaryverifyToken);

module.exports={
  "appuse_xaccestoken":appuse_xaccestoken,
   "routerbeneficiary":routerbeneficiary
};



