import './App.css';
import React, {useState} from 'react'
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
   
  const showAlert = (message, type) =>{
          setAlert({
            msg: message,
            type: type
          })

        setTimeout(() => {
          setAlert(null)
        }, 2000);  
  }


 const toggleMode = () =>{
   if(mode==='light') {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert(" Dark mode has been enabled" , "Success")
          
        
        }

      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert(" Light mode has been enabled" , "Success")
        

      } 
  }
  return (
    <>
      <Router>
    <NavBar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert} />
     <div className="container my-3">
       
     <Switch>
          <Route path="/about">
            <About mode = {mode} />
          </Route>
          
          <Route path="/">
          <TextForm showAlert = {showAlert} heading = "Enter The Text to Analyze"  mode = {mode} />
        
          </Route>
        </Switch>
  
        </div>
        </Router>
      
 
  
    </>
  );
}

export default App;
