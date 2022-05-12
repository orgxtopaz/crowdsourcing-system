
let Fund = require("../models/fund.model");
const displayFund =async (req, res) => {
  const email = req.body.email;

    Fund.find({ email: { $eq: email } })
  /// VALIDATING IF USER EXIST
  .then(fund => {
  
    if (fund.length > 0) {
   
     

      res.json({ fund:fund })

    } else {
      res.status(400).json({ auth: false, message: "User did not exist" })
    }

  })



}


module.exports = displayFund;
