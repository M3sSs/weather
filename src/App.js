
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Upcoming from './components/Upcoming';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light');
  let toggleMode=()=>{
    // console.log("button clicked")
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
      document.body.style.color='#fff'
      document.getElementById("toggleLabel").innerHTML="LIGHT";
      showAlert("Dark mode has been enabled","success")
      document.title="TextAntSant-Dark"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#fff'
      document.body.style.color='black'
      document.getElementById("toggleLabel").innerHTML="DARK";
      showAlert("light mode has been enabled","success")
      document.title="TextAntSant-light"
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{setAlert(null,null)},1500)
  }
  return (
  <>
  {/* props are the properties given to a component by us such as title and aboutText given below */}
  {/* <Navbar title="Home" aboutText="Featuresss"/> */}
  {/* <Navbar /> */}
  <Alert alert={alert}/>
  <Navbar title="TextAntSant" aboutText='About' mode={mode} toggleMode={toggleMode}/>
  <TextForm heading="Enter the text to analyze"/>
  {/* <About /> */}

  </>
  
  );
}

export default App;
