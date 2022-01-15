import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateAccount from "./components/CreateAccount";
import LogIn from './components/LogIn';
import  './components/Ben.css';


function App() {
  return (
    <div className = "appjs_Container">
    <CreateAccount> </CreateAccount>
    </div>
  );
}

export default App;
