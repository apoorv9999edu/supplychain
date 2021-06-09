const db = require("../models");

const beneficiary = db.beneficiary;

checkDuplicateUidOrEmail = function(req, res, next) {
  
  console.log(req.body.buid,req.body.bname, req.body.bemail);

  beneficiary.findOne({
    uid: req.body.buid,
    email: req.body.bemail
  }).exec((err, ben) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    else if ( ben) {
      res.status(400).send({ message: `Failed! already exist!` });
      return;
    }
  });
  next();
};



const verifySignUp =checkDuplicateUidOrEmail;

module.exports =  verifySignUp;