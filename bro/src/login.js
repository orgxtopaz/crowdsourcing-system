import React from 'react'
import { useEffect } from "react"; //a hook that GIVES  "side-effects"
import { useHistory } from "react-router-dom"; // allows us to access our path / route history.
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import { useParams } from "react-router-dom"; // returns: an object of key/value pairs of URL parameters
import swal from 'sweetalert';
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.

  const LoginNow =(e)=>{
    e.preventDefault();
  
    const data ={
        password: password,
        email: email
    }
    
    Axios.post("http://localhost:5000/login",data)
  
    .then(res =>{
  
       //IF AUTH IS = TRUE comes from the backend!
     if (res.data.auth){
  
       if(res.data.position ==="user"){
        console.log(res.data)
        localStorage.setItem("user", res.data.token);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("userDetails",JSON.stringify(res.data.user));
        localStorage.setItem("position",JSON.stringify(res.data.position));

        swal({
          title: "Login Successfully!",
          icon: "success",
          showConfirmButton: false,

        
         
        });
        setTimeout(() => {
          history.push("/user")
          window.location.reload();

        }, "2000")


  
       } else if(res.data.position ==="admin"){       
        localStorage.setItem("admin", res.data.token);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("userDetails", res.data.user);
        localStorage.setItem("position",JSON.stringify(res.data.position));

  
        swal({
          title: "Admin Login Successfully!",
          icon: "success",
          showConfirmButton: false,

        
         
        });
        setTimeout(() => {
          history.push("/AdminHome")
          window.location.reload();

        }, "2000")

  
       }
       
   
     }
      
  
    })
     .catch(err =>{
      swal({
        text:"Account doesn't exist",
        icon: "warning",
     

      
       
      });
        
   })
  
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
        history.push("/")


      })

    }else{
      console.log("ERROR")
    }


  }, isLoaded);
  return (
    <div className="wrapperlogin">
        <div className="logo"> <img src="https://wallpapercave.com/wp/wp2123032.jpg" alt="" /> </div>
        <div className="text-center mt-4 name"> Josef </div>
        <form className="p-3 mt-3" onSubmit={LoginNow}>
          <div className="form-field d-flex align-items-center"> <span className="far fa-user" /> <input required type="email" name="userName" id="userName" placeholder="Email"  onChange={(event) => {
                                  setEmail(event.target.value);
                                }} /> </div>
          <div className="form-field d-flex align-items-center"> <span className="fas fa-key" /> <input type="password" name="password" required id="pwd" placeholder="Password"  onChange={(event) => {
                                  setPassword(event.target.value);
                                }} /> </div> 
          <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6"> <a >Forget password?</a> or <a href="/register">Sign up</a> </div>
      </div>
  )
}

export default Login