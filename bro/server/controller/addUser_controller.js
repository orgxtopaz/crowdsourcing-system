
let User = require("../models/user.model");

const AddUser =async (req, res) => {
 

  
      const username = req.body.username;
      const password = req.body.password;
      const email = req.body.email;
      const totalInvestment = 0;
      const verified = "false"
      const position = "user"
      const code = Math.floor(100000 + Math.random() * 900000);
      console.log(code)
      const date = req.body.date
      
          const newUser = new User({
           
       
              username,
              password ,
              email ,
              totalInvestment ,
              verified ,
              position,
              date,
              code
      
      
            }); // Instantiate the User in user.model`
          


      newUser.save()
     

      .then((user) => res.json({ user:user })) // IF TRUE CHECK
      .catch((err) => res.status(400).json("Errors: " + err)); // CATCH THE ERROR

           


            const sgMail = require("@sendgrid/mail");

            const API_KEY =
              "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";
          
            sgMail.setApiKey(API_KEY);
          
            const message = {
              to: {
                email: `${email}`,
                name: `${email}`,
              },
              from: {
                email: "nalhubsys@gmail.com",
                name: `Verify your Account`,
              },
              templateId: "d-08b6ba1904404956b2075360cab7e116",
              dynamicTemplateData: {
                code: `${code}`,
              },
            };
          
            sgMail
              .send(message)
              .then((response) => console.log(` verify email sent ${code}`))
              .catch((error) => console.log(error.message));
          
       
  
    
}  





module.exports = AddUser;
