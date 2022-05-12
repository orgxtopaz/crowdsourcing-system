
import './css/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"; //routes

//////ADMIN
import AdminHome from "./home";
import AdminPosts from "./posts";
import Investor from "./investors";

///////GENERAL
import Login from "./login";
import Register from "./register";



//////USER
import User from "./user";
import UserBusiness from "./userBusiness";




function App() {
  return (
    <div className="App">
     
    
       



      <Router>

   
           
           {/* ADMIN ROUTES */}
           <Route exact path="/AdminHome" component={AdminHome} />
           <Route exact path="/adminPosts" component={AdminPosts} />
           <Route exact path="/investors" component={Investor} />

           {/* USER ROUTES */}
           <Route exact path="/user" component={User} />
           <Route exact path="/userBusiness" component={UserBusiness} />


           <Route exact path="/" component={Login} />
           <Route exact path="/register" component={Register} />
        
 

           {/* ENED WEIGHT LOSS EXERCISES */}

  
         </Router>
    </div>




  );
}

export default App;
