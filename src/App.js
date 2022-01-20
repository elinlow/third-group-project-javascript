import StartPage from "./components/StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import CreateAccontPage from "./components/CreateAccountPage";
import HomePage from "./components/HomePage";
import "./App.css";
import LikePicture from "./components/LikePicture";
import "./sissel.css";
import ProfilePage from "./components/ProfilePage";
import "./elliot.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StartPage/>}></Route>
          <Route path="/LogInPage" element={<LogInPage/>}></Route>
          <Route path="/CreateAccontPage" element={<CreateAccontPage/>}></Route>
          <Route path="/HomePage" element={<HomePage/>}></Route>
          <Route path="/LikePicture" element={<LikePicture/>}></Route>
          <Route path="/" exact element={<StartPage />}></Route>
          <Route path="/LogInPage" element={<LogInPage />}></Route>
          <Route
            path="/CreateAccontPage"
            element={<CreateAccontPage />}
          ></Route>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/LikePicture" element={<LikePicture />}></Route>
          <Route path="/ProfilePage" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
