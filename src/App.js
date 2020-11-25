import {Component} from "react";
import Navbar from "./Components/Navbar"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Routepart from "./Components/Routepart";


  

class App extends Component{
   render(){
     return(
       <BrowserRouter>
            <div>
            
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={ContactUs} />
              <Route path ="/:post_id" component ={Routepart} />
            </Switch>

          </div>
       </BrowserRouter>
       
     )
   }

}
export default App;