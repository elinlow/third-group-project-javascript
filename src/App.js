import StartPage from './components/StartPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import './App.css';
import './sissel.css';
import './Ben.css'
import LogIn from './components/LogIn';
import CreateAccountFormFields from './components/CreateAccount';
import LogIn2 from './components/logIn2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StartPage/>}></Route>
          <Route path="/HomePage" element={<HomePage/>}></Route>
          <Route path="/LogIn" element={<LogIn/>}></Route>
          <Route path="/CreateAccount" element={<CreateAccountFormFields/>}></Route>
          <Route path="/LogIn2" element={<LogIn2/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
