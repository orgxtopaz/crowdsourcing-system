import React from 'react'
import { useEffect } from "react"; //a hook that GIVES  "side-effects"
import { useHistory } from "react-router-dom"; // allows us to access our path / route history.
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import { useParams } from "react-router-dom"; // returns: an object of key/value pairs of URL parameters
import swal from 'sweetalert';





function Register() {


const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [code, setCode] = useState("");
const [nextPage, setnexPage] = useState(false);
const [verifyEmail, setVerifyEmail] = useState(true);

function CreateAccount(e){

  e.preventDefault();

    setnexPage(true)
    setVerifyEmail(false)

    Axios.post("http://localhost:5000/register",
    
    {
    
      username:username,
      email:email,
    password:password,
   
   
      date:new Date().toLocaleString()
     
    })
      .then((res) => {  
        console.log(res.data.user)

        localStorage.setItem("email",res.data.user.email)
        localStorage.setItem("userId",res.data.user._id)
     
      }) 
      .catch ((err) => {
                 
    
        if(err.response.data[27]=='1'){
       
          swal({
            title: "Email already exist!",
            text: "Please register new email!",
            icon: "warning",
            button: "Got it",
           
          });
          setTimeout(() => {
            window.location.reload()
          }, "3000")
       
        }

      })

}   

  let history = useHistory()
  function verifyNow(e){
    e.preventDefault()
    if(code==""){
      swal({
        title: "Code is Invalid!",
        text: "Please see the code which was send to your Email!",
        icon: "warning",
        button: "Got it",
       
      });
    }else{


      
        const data = {
            code: code,
            email: localStorage.getItem("email"),
            userId: localStorage.getItem("userId")
        }

        Axios.put("http://localhost:5000/verify", data)

            .then(res => {

              swal({
                title: "Email Verified Successfully!",
                icon: "success",
                button: "Got it",             
              });
              setTimeout(() => {
                history.push("/")
                window.location.reload();
              }, "3000")

            })
            .catch(err => {
              swal({
                title: "Code is Wrong!",
                text: "Please see the code which was send to your Email!",
                icon: "warning",
                button: "Got it",
               
              });
            })



    }
  }
  const isLoaded = [true];
  useEffect(() => {

     if (isLoaded) {
      Axios.post("http://localhost:5000/login", 

      { 
        
        
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
      
      }
      
      )
    
      
      .then((res) => {
        if(res.data.position ==="user"){ 

          history.push("/user")
          window.location.reload();
        }else if(res.data.position ==="admin"){
          history.push("/AdminHome")
          window.location.reload();
        }
      


     
      })
      .catch((error) => {
     


      })

    }else{
      console.log("ERROR")
    }


  }, isLoaded);

  return (
    <div className="wrapperlogin" style={{marginTop:"1%"}}>
    
        <div className="logo"> <img src="https://wallpapercave.com/wp/wp2123032.jpg" alt="" /> </div>
        <div className="text-center mt-4 name"> Josef </div>
        <div hidden={nextPage}>

        <form className="p-3 mt-3" onSubmit={CreateAccount}>

        <div className="form-field d-flex align-items-center"> <span className="fas fa-shield-alt" /> <input type="text" name="password" required id="pwd" placeholder="Username" onChange={(event) => {
                                  setUsername(event.target.value);
                                }} /> </div> 

          <div className="form-field d-flex align-items-center"> <span className="fa fa-envelope" /> <input type="email" required placeholder="Email Address" id="userName" onChange={(event) => {
                                  setEmail(event.target.value);
                                }} /> </div>
          <div className="form-field d-flex align-items-center"> <span className="fas fa-key" /> <input  onChange={(event) => {
                                  setPassword(event.target.value);
                                }}type="password" name="password"  required id="pwd" placeholder="Password" /> </div> 
          <button className="btn mt-3" >Sign up</button>
        </form>
        <div className="text-center fs-6"> <a href="#">Forget password?</a> or <a href="/">Login</a> </div>
        </div>

        {/* VERIFY AREA */}

              <div hidden={verifyEmail}>

      <form className="p-3 mt-3">

      <div className="form-field d-flex align-items-center"> <span className="fas fa-shield-alt" /> 
      
      <input type="text" name="password" id="pwd" placeholder="Code" onChange={(event) => {
                                  setCode(event.target.value);
                                }} /> </div> 

       
        <button className="btn mt-3" onClick={verifyNow}>Verify</button>
      </form>
      <div className="text-center fs-6"> <a href="#">Forget password?</a> or <a href="/">Login</a> </div>
      </div>

        </div>
   
  )
}

export default Register