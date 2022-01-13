import "./App.css";
import ReactDOM from "react-dom";
import SharePictures from "./components/SharePicture";

const App = () => {
  return ReactDOM.render(<SharePictures />, document.getElementById("root"));
};

export default App;
