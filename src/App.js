import './App.css';
// import About from './components/About';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  const[mode , setMode] = useState('dark');
  const[alert,setAlert] = useState(null);
  const showAlert = (message , type)=>{
           setAlert({
            msg : message,
            type : type
           })
  }
   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'pink';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled" , "success");

    }else{
        setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled" , "success");



    }
   }
  return (
    <>
    {/* <Router> */}
     <Navbar title="myPortfolio" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode}/>
     <Alert alert = {alert}/>
     <div className="container">
     {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/"> */}
          <TextForm showAlert = {showAlert} heading="Enter the text to analyze"/>
            
          {/* </Route> */}
        {/* </Switch> */}
     </div>
        {/* </Router> */}
    
      
      {/* <About/> */}

    </>
   
  );
}

export default App;
