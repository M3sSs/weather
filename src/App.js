// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Upcoming from './components/Upcoming';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  let toggleMode = () => {
    // ... your toggleMode function code ...
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    // ... your showAlert function code ...
  };

  return (
    
      <>
        <Alert alert={alert} />
        <Navbar title="TextAntSant" aboutText='About' mode={mode} toggleMode={toggleMode} />
        <TextForm heading="Enter your text here"/>
      </>
    
  );
}

export default App;
