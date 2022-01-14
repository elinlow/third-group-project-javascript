import StartPage from './components/StartPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import './App.css';
import './sissel.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StartPage/>}></Route>
          <Route path="/HomePage" element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
