import StartPage from './components/StartPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LogIn from './components/LogIn';
import './App.css';
import LikePicture from './components/LikePicture';
import './sissel.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StartPage/>}></Route>
          <Route path="/HomePage" element={<HomePage/>}></Route>
          <Route path="/LikePicture" element={<LikePicture/>}></Route>
          <Route path="/LogIn" element={<LogIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
