const config = require("../config/auth.config");
const db = require("../models");
const beneficiary = db.beneficiary;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

  console.log(req.body.buid,req.body.bname, req.body.bemail);

  const newben = new beneficiary({
    uid: req.body.buid,
    name: req.body.bname,
    email: req.body.bemail,
    password: bcrypt.hashSync(req.body.bpassword,8),
    age:req.body.bage,

  });
  newben.save((err, bene) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }else{
        res.send({ message: "User was registered successfully!" });
    }

  });
};


exports.signin = (req, res) => {

  beneficiary.findOne({
    email: req.body.email
  }).exec((err, bene) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      else if (!bene) {
        return res.status(404).send({ message: "beneficiary Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(req.body.password,bene.password,8);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: bene.buid }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: bene._id,
        name: bene.name,
        email: bene.email,
        accessToken: token
      });

      next();
    });
};